import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// This component renders a text carousel using the react-alice-carousel library
export default function TextCarousel() {
  // Define an array of text items to display in the carousel
  const items = [
    "Productos 100% originales traidos desde el otro lado del mundo.",
    "Productos originales Nike, Adidas hasta un 40% más baratos.",
    "Pagos contra entrega y con tarjeta para una mayor confiabilidad.",
    "Camisetas originales de tu equipo favorito.",
    "Camisetas retro del Barcelona, Real Madrid y más.",
  ].map((item, i) => (
    // Each item is wrapped in a div with specific styling
    <div
      key={i}
      className="item"
      style={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        padding: '10px',
        textAlign: 'center',
        color: 'black'
      }}
    >
      {item}
    </div>
  ));

  // Render the AliceCarousel component with specified configurations
  return (
    <>
      <AliceCarousel
        autoPlay            // Enable auto play
        autoPlayInterval={5000}  // Set auto play interval (in milliseconds)
        autoHeight          // Adjust the height automatically
        infinite            // Enable infinite looping
        mouseTracking={false}   // Disable mouse tracking
        disableButtonsControls  // Disable buttons for navigation control
        disableDotsControls     // Disable dots for navigation control
        items={items}           // Pass the array of items to display
      />
    </>
  );
}