import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../FactsPost/Layout.module.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function FactsPost() {
  const location = useLocation();

  return (
    <Container className='factBackground'>
     

<div style={{display: "flex", justifyContent: "space-around"}}>
      <Card style={{ width: '18rem', margin: 10}}>
        <Card.Img variant="top" src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892506/EducationHub/photos/the-great-wall-of-china.jpg" alt="the great wall of china" />
        <Card.Body>
          <Card.Title>The great wall of china</Card.Title>
          <Card.Text>
          Some say the Great Wall is the longest cemetery on Earth because archaeologists have found human remains under parts of it. It's estimated that over one million people died building the wall during the Qin Dynasty.          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/captain-woman-copilot-getting-ready-fly-airplane-takeoff-with-dashboard-navigation-cockpit-command-airline-crew-fixing-altitude-level-with-control-panel-buttons-flying-plane_482257-46710.jpg?t=st=1718544147~exp=1718547747~hmac=adae849999ab0c8f7aaddd243a92b6c0ae6e21b98ba6fa0bb272c6a3ccd88382&w=2000" alt="Pilots eat different meals" />
        <Card.Body>
          <Card.Title>Pilots eat different meals</Card.Title>
          <Card.Text>
          Pilots eat different meals to avoid food poisoning during flights. The pilot eats the same meal as first and business class passengers, while the co-pilot eats a different meal.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/eiffel-tower_1160-765.jpg?t=st=1718544233~exp=1718547833~hmac=56df6433259ac638db0ddfdff2ec0a7eaca530e0830e252b3d215484d118cca0&w=2000" alt="The Eiffel Tower was once hated" />
        <Card.Body>
          <Card.Title>The Eiffel Tower was once hated</Card.Title>
          <Card.Text>
          When it was built, many Parisians disliked the Eiffel Tower, thinking it was dangerous, unstable, and ugly. Today, it's one of Paris's most iconic symbols and the world's most visited paid attraction.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
      <Card style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src="https://vid.alarabiya.net/images/2018/01/18/ece7a9a2-7988-4432-b260-88fe39e97e22/ece7a9a2-7988-4432-b260-88fe39e97e22_16x9_600x338.JPG" alt="Saudi Arabia has no rivers" />
        <Card.Body>
          <Card.Title>Saudi Arabia has no rivers</Card.Title>
          <Card.Text>
          Saudi Arabia doesn't have any permanent natural rivers, but it does have wadis, which are valleys that collect water during heavy rains.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/health-wellbeing-life_53876-123910.jpg?t=st=1718544480~exp=1718548080~hmac=d171d2640cb31ad07c7aeeab4120add032dfa3d8a2a12737b189e2412003e736&w=2000" alt="Travel can have health benefits" />
        <Card.Body>
          <Card.Title>Travel can have health benefits</Card.Title>
          <Card.Text>
          Research shows that travel can boost brain health, reduce stress, and keep the body healthy, which can lead to longevity. Studies also show that exposure to new cultures and experiences can stimulate the senses and enhance creativity.      
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src="https://images-htschool.hindustantimes.com/wp-content/uploads/2023/02/dogs.jpg" alt="Dogs are banned from Antarctica" />
        <Card.Body>
          <Card.Title>Dogs are banned from Antarctica</Card.Title>
          <Card.Text>
          It's illegal to bring non-native species into Antarctica, including pet dogs and cats, live poultry, and household plants or seeds. It's also prohibited to harm or take Antarctica's wildlife without a permit from a national authority.Dogs were banned from the South Pole in 1994 because they were spreading a canine infection to seals.      
          </Card.Text>
        </Card.Body>
      </Card>


    </div>


    </Container>
  );
}

export default FactsPost;
