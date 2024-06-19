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
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
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
      const fetchPlaces = async () => { // get all traveled place

          try {
              const response = await axios.get(`https://travel-app-backend-uco2.onrender.com/tracker?userId=${userId}`);
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
          const response = await axios.post('https://travel-app-backend-uco2.onrender.com/tracker', {
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
      const response = await axios.delete(`https://travel-app-backend-uco2.onrender.com/tracker/${userId}/places/${index}`);
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
          const response = await axios.put(`https://travel-app-backend-uco2.onrender.com/tracker/${userId}/places/${index}`, {
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
        <Container >
            <Form className='travel_form' onSubmit={handleSubmit}  style={{backgroundColor: "white"}}>
                <CountrySelect  
                  selectedCountry={selectedCountry} 
                  onChange={setSelectedCountry} 
                />
                <input 
                className='travel_input'
                  type="text" 
                  placeholder='city ...' 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                />
                <button className="travel_btn" type="submit">Submit</button>
            <div>
            <div className='travel_center'>
                <h3 style={{display: 'flex', justifyContent: "center"}}>Places Traveled</h3>
                <ul className='travel_list'>
                    {placesTraveled.map((place, index) => (
                      <li key={index}>
                        {place} 
                        <button className="travel_btn yellow" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="travel_btn red" onClick={() => handleDelete(index)}>Delete</button>
                    </li>                    
                    ))}
                </ul>
            </div>
                <button className="btn btn-success" onClick={handlePrint}>Print page where you have been</button>
            </div>
            <br />
          </Form>
        </Container>
    );
}

export default SelectCounty;
