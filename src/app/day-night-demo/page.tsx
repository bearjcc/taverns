import DayNightCycle from '../../components/ui/DayNightCycle';

export default function DayNightDemo() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#000' }}>
      <h1 style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        color: 'white', 
        zIndex: 10,
        fontFamily: 'monospace'
      }}>
        Day/Night Cycle Animation Demo
      </h1>
      <p style={{ 
        position: 'absolute', 
        top: '60px', 
        left: '20px', 
        color: 'white', 
        zIndex: 10,
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
        This animation cycles through day and night with moving clouds, wind, stars, and rotating sun/moon.
      </p>
      <DayNightCycle />
    </div>
  );
} 