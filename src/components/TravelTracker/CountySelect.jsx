import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 


const CountrySelect = ({ selectedCountry, onChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(
          "http://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
          .then((response) => response.json())
          .then((data) => {
            setCountries(data.countries);
          });
      }, []);

    return (
        <Select
          options={countries}
          value={selectedCountry}
          onChange={onChange}
        />
    );
};


function SelectCounty() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [city, setCity] = useState('');
    const [placesTraveled, setPlacesTraveled] = useState([]);
    const userId = localStorage.getItem('userId'); 

    useEffect(() => {
      const fetchPlaces = async () => { // get all traveled pla

          try {
              const response = await axios.get(`http://localhost:8000/tracker?userId=${userId}`);
              setPlacesTraveled(response.data.places);
          } catch (error) {
              console.error('Error fetching places:', error);
          }
      };
      fetchPlaces();
  }, [userId]);


//  ADD 
const handleSubmit = async (e) => {
  e.preventDefault();

  if (selectedCountry && city) {
      const newPlace = `${selectedCountry.label}, ${city}`;
      try {
          const response = await axios.post('http://localhost:8000/tracker', {
              userId,
              newPlace
          });
          const updatedPlaces = [...placesTraveled, newPlace].sort((a, b) => {
              const countryA = a.split(', ')[0];
              const countryB = b.split(', ')[0];
              return countryA.localeCompare(countryB);
          });
          setPlacesTraveled(updatedPlaces);
          setSelectedCountry(null); // Clear inputs after submitting the data
          setCity('');
      } catch (error) {
          console.error('Error adding place:', error);
      }
  }
};

// DELETE place
const handleDelete = async (index) => {
  try {
      const response = await axios.delete(`http://localhost:8000/tracker/${userId}/places/${index}`);
      if (response.data.success) {
          const updatedPlaces = placesTraveled.filter((_, i) => i !== index);
          setPlacesTraveled(updatedPlaces);
      } else {
          console.error('Failed to delete place:', response.data.message);
      }
  } catch (error) {
      console.error('Error deleting place:', error);
  }
};

// UPDATE
const handleEdit = async (index) => {
  const newCity = prompt('Enter new city name:');
  if (newCity) {
      try {
          const response = await axios.put(`http://localhost:8000/tracker/${userId}/places/${index}`, {
              newCity
          });
          if (response.data.success) {
              const updatedPlaces = [...placesTraveled];
              const currentPlace = updatedPlaces[index];
              const currentCountry = currentPlace.split(', ')[0];
              updatedPlaces[index] = `${currentCountry}, ${newCity}`;
              setPlacesTraveled(updatedPlaces);
          } else {
              console.error('Failed to update place:', response.data.message);
          }
      } catch (error) {
          console.error('Error updating place:', error);
      }
  }
};

const handlePrint = () => { 
    window.print(); 
};

    return (
        <Container>
            <Form  onSubmit={handleSubmit}  style={{backgroundColor: "white"}}>
                <CountrySelect 
                  selectedCountry={selectedCountry} 
                  onChange={setSelectedCountry} 
                />
                <input 
                  type="text" 
                  placeholder='city ...' 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                />
                <button className="btn btn-primary text-center p-1" type="submit">Submit</button>
            <div>
                <h3 style={{display: 'flex', justifyContent: "center"}}>Places Traveled</h3>
                <ul>
                    {placesTraveled.map((place, index) => (
                      <li key={index}>
                        {place} 
                        <button className="btn btn-warning text-center p-1" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="btn btn-primary text-center p-1" onClick={() => handleDelete(index)}>Delete</button>
                    </li>                    
                    ))}
                </ul>
                <button className="btn btn-success" onClick={handlePrint}>Print page where you have been</button>
            </div>
            <br />
          </Form>
        </Container>
    );
}

export default SelectCounty;
