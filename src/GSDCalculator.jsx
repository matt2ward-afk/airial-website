import React, { useState, useEffect } from 'react';

// Drone camera database
const DRONE_DATABASE = [
  {
    name: "DJI Matrice 4 Enterprise (M4E / Mavic 3 Enterprise)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 12.3
  },
  {
    name: "DJI Matrice 300/350 RTK + Zenmuse P1 (35mm)",
    imageWidth: 8192,
    imageHeight: 5460,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 35
  },
  {
    name: "DJI Matrice 300/350 RTK + Zenmuse P1 (24mm)",
    imageWidth: 8192,
    imageHeight: 5460,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 24
  },
  {
    name: "DJI Matrice 300/350 RTK + Zenmuse P1 (50mm)",
    imageWidth: 8192,
    imageHeight: 5460,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 50
  },
  {
    name: "DJI Matrice 300/350 RTK + Zenmuse L1 (RGB)",
    imageWidth: 5472,
    imageHeight: 3648,
    sensorWidth: 13.2,
    sensorHeight: 8.8,
    focalLength: 8.8
  },
  {
    name: "DJI Matrice 300/350 RTK + Zenmuse L2 (RGB)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 12.3
  },
  {
    name: "DJI Phantom 4 RTK",
    imageWidth: 5472,
    imageHeight: 3648,
    sensorWidth: 13.2,
    sensorHeight: 8,
    focalLength: 8.8
  },
  {
    name: "WingtraOne (Sony RX1R2)",
    imageWidth: 7952,
    imageHeight: 5304,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 35
  },
  {
    name: "WingtraOne RGB61",
    imageWidth: 9504,
    imageHeight: 6336,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 24
  },
  {
    name: "WingtraOne Map61",
    imageWidth: 9504,
    imageHeight: 6336,
    sensorWidth: 35.7,
    sensorHeight: 23.9,
    focalLength: 17
  },
  {
    name: "WingtraOne (Sony A6100 20mm)",
    imageWidth: 6000,
    imageHeight: 4000,
    sensorWidth: 23.5,
    sensorHeight: 15.6,
    focalLength: 20
  },
  {
    name: "WingtraOne (Sony A6100 16mm)",
    imageWidth: 6000,
    imageHeight: 4000,
    sensorWidth: 23.5,
    sensorHeight: 15.6,
    focalLength: 16
  },
  {
    name: "WingtraOne (Sony A6100 12mm)",
    imageWidth: 6000,
    imageHeight: 4000,
    sensorWidth: 23.5,
    sensorHeight: 15.6,
    focalLength: 12
  },
  {
    name: "WingtraOne QX1 + 15mm Voigtlander",
    imageWidth: 5456,
    imageHeight: 3632,
    sensorWidth: 23.2,
    sensorHeight: 15.4,
    focalLength: 15
  },
  {
    name: "Anzu Raptor",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.7,
    sensorHeight: 13,
    focalLength: 12.3
  },
  {
    name: "Autel Evo II V2",
    imageWidth: 5472,
    imageHeight: 3648,
    sensorWidth: 13.1,
    sensorHeight: 8.8,
    focalLength: 8.8
  },
  {
    name: "Autel Evo II V3",
    imageWidth: 5472,
    imageHeight: 3648,
    sensorWidth: 13.1,
    sensorHeight: 8.8,
    focalLength: 10.6
  },
  {
    name: "Freefly Astro with Sony ILX-LR1",
    imageWidth: 9504,
    imageHeight: 6336,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 24
  },
  {
    name: "Inspired Flight IF800 Tomcat with Sony ILX-LR1",
    imageWidth: 9504,
    imageHeight: 6336,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 24
  },
  {
    name: "Quantum with Sony RX1RII",
    imageWidth: 7952,
    imageHeight: 5304,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 35
  },
  {
    name: "Quantum with Sony UMC 20mm",
    imageWidth: 5456,
    imageHeight: 3632,
    sensorWidth: 23.2,
    sensorHeight: 15.4,
    focalLength: 20
  },
  {
    name: "Quantum with Sony UMC 16mm",
    imageWidth: 5456,
    imageHeight: 3632,
    sensorWidth: 23.2,
    sensorHeight: 15.4,
    focalLength: 16
  },
  {
    name: "WingtraOne RX1",
    imageWidth: 8000,
    imageHeight: 5320,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 35
  },
  {
    name: "WingtraOne (Sony QX1 20mm)",
    imageWidth: 5456,
    imageHeight: 3632,
    sensorWidth: 23.2,
    sensorHeight: 15.4,
    focalLength: 20
  },
  {
    name: "WingtraOne (Sony QX1 15mm)",
    imageWidth: 5456,
    imageHeight: 3632,
    sensorWidth: 23.2,
    sensorHeight: 15.4,
    focalLength: 20
  },
  {
    name: "DJI Inspire 2 (X4S)",
    imageWidth: 5472,
    imageHeight: 3078,
    sensorWidth: 13.2,
    sensorHeight: 8,
    focalLength: 8.8
  },
  {
    name: "DJI Inspire 2 (X5S-15mm)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 15
  },
  {
    name: "DJI Inspire 2 (X5S-14mm)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 14
  },
  {
    name: "DJI Inspire 2 (X5S-45mm)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 45
  },
  {
    name: "DJI Inspire 2 (X5S-42mm)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 42
  },
  {
    name: "DJI Inspire 2 (X5S-12mm)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 17.3,
    sensorHeight: 13,
    focalLength: 12
  },
  {
    name: "DJI Matrice 200 (X4S)",
    imageWidth: 5472,
    imageHeight: 3078,
    sensorWidth: 13.2,
    sensorHeight: 8,
    focalLength: 8.8
  },
  {
    name: "DJI Matrice 350",
    imageWidth: 9504,
    imageHeight: 6336,
    sensorWidth: 35.9,
    sensorHeight: 24,
    focalLength: 24
  },
  {
    name: "Freefly Astro",
    imageWidth: 9504,
    imageHeight: 6336,
    sensorWidth: 35.7,
    sensorHeight: 23.9,
    focalLength: 17
  },
  {
    name: "Ebee (Sensefly S.O.D.A)",
    imageWidth: 5280,
    imageHeight: 3956,
    sensorWidth: 12.75,
    sensorHeight: 8.5,
    focalLength: 10.5
  }
];

// Icon components (inline SVG)
const PlaneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);

const RulerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/>
    <path d="m14.5 12.5 2-2"/>
    <path d="m11.5 9.5 2-2"/>
    <path d="m8.5 6.5 2-2"/>
    <path d="m17.5 15.5 2-2"/>
  </svg>
);

export default function GSDCalculator() {
  const [mode, setMode] = useState('database');
  const [selectedDrone, setSelectedDrone] = useState('');
  const [flightHeight, setFlightHeight] = useState(100);
  const [unit, setUnit] = useState('meters');
  
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [sensorWidth, setSensorWidth] = useState(0);
  const [sensorHeight, setSensorHeight] = useState(0);
  const [focalLength, setFocalLength] = useState(0);

  useEffect(() => {
    if (mode === 'database' && selectedDrone) {
      const drone = DRONE_DATABASE.find(d => d.name === selectedDrone);
      if (drone) {
        setImageWidth(drone.imageWidth);
        setImageHeight(drone.imageHeight);
        setSensorWidth(drone.sensorWidth);
        setSensorHeight(drone.sensorHeight);
        setFocalLength(drone.focalLength);
      }
    }
  }, [selectedDrone, mode]);

  const calculateGSD = () => {
    if (!imageWidth || !sensorWidth || !focalLength || !flightHeight) return null;
    const heightInMeters = unit === 'feet' ? flightHeight * 0.3048 : flightHeight;
    const gsd = (sensorWidth * heightInMeters * 100) / (focalLength * imageWidth);
    return gsd;
  };

  const calculateCoverage = () => {
    const gsd = calculateGSD();
    if (!gsd || !imageWidth || !imageHeight) return null;
    
    const widthMeters = (imageWidth * gsd) / 100;
    const heightMeters = (imageHeight * gsd) / 100;
    const areaMeters = widthMeters * heightMeters;
    
    return {
      width: widthMeters,
      height: heightMeters,
      area: areaMeters,
      areaHectares: areaMeters / 10000
    };
  };

  const gsd = calculateGSD();
  const coverage = calculateCoverage();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1628 100%)',
      color: '#e8edf5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ color: '#3b82f6' }}><PlaneIcon /></div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              margin: 0,
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}>
              GSD CALCULATOR
            </h1>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Calculate Ground Sampling Distance for precision aerial surveys
          </p>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Input Panel */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CameraIcon />
              Camera Configuration
            </h2>

            {/* Mode Toggle */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              padding: '0.25rem',
              borderRadius: '8px'
            }}>
              <button
                onClick={() => setMode('database')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '6px',
                  background: mode === 'database' ? '#3b82f6' : 'transparent',
                  color: mode === 'database' ? '#fff' : '#94a3b8',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  fontSize: '0.875rem'
                }}
              >
                Drone Database
              </button>
              <button
                onClick={() => setMode('custom')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '6px',
                  background: mode === 'custom' ? '#3b82f6' : 'transparent',
                  color: mode === 'custom' ? '#fff' : '#94a3b8',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  fontSize: '0.875rem'
                }}
              >
                Custom Parameters
              </button>
            </div>

            {/* Drone Selection or Custom Inputs */}
            {mode === 'database' ? (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Select Drone / Camera
                </label>
                <select
                  value={selectedDrone}
                  onChange={(e) => setSelectedDrone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    background: 'rgba(15, 23, 42, 0.6)',
                    color: '#e8edf5',
                    fontSize: '0.875rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Choose a drone...</option>
                  {DRONE_DATABASE.map((drone, idx) => (
                    <option key={idx} value={drone.name}>
                      {drone.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { label: 'Image Width', value: imageWidth, setter: setImageWidth, unit: 'px' },
                  { label: 'Image Height', value: imageHeight, setter: setImageHeight, unit: 'px' },
                  { label: 'Sensor Width', value: sensorWidth, setter: setSensorWidth, unit: 'mm' },
                  { label: 'Sensor Height', value: sensorHeight, setter: setSensorHeight, unit: 'mm' },
                  { label: 'Focal Length', value: focalLength, setter: setFocalLength, unit: 'mm' }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#cbd5e1'
                    }}>
                      {field.label}
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="number"
                        value={field.value || ''}
                        onChange={(e) => field.setter(parseFloat(e.target.value) || 0)}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          paddingRight: '3rem',
                          borderRadius: '8px',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          background: 'rgba(15, 23, 42, 0.6)',
                          color: '#e8edf5',
                          fontSize: '0.875rem',
                          outline: 'none',
                          fontFamily: '"Courier New", monospace'
                        }}
                      />
                      <span style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {field.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Flight Height */}
            <div style={{ marginTop: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#cbd5e1',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <RulerIcon />
                Flight Height
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="number"
                  value={flightHeight}
                  onChange={(e) => setFlightHeight(parseFloat(e.target.value) || 0)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    background: 'rgba(15, 23, 42, 0.6)',
                    color: '#e8edf5',
                    fontSize: '0.875rem',
                    outline: 'none',
                    fontFamily: '"Courier New", monospace'
                  }}
                />
                <div style={{
                  display: 'flex',
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '8px',
                  padding: '0.25rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>
                  <button
                    onClick={() => setUnit('meters')}
                    style={{
                      padding: '0.5rem 1rem',
                      border: 'none',
                      borderRadius: '6px',
                      background: unit === 'meters' ? '#3b82f6' : 'transparent',
                      color: unit === 'meters' ? '#fff' : '#94a3b8',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.75rem'
                    }}
                  >
                    m
                  </button>
                  <button
                    onClick={() => setUnit('feet')}
                    style={{
                      padding: '0.5rem 1rem',
                      border: 'none',
                      borderRadius: '6px',
                      background: unit === 'feet' ? '#3b82f6' : 'transparent',
                      color: unit === 'feet' ? '#fff' : '#94a3b8',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.75rem'
                    }}
                  >
                    ft
                  </button>
                </div>
              </div>
            </div>

            {/* Specs Display */}
            {(imageWidth > 0 && sensorWidth > 0) && (
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.4)',
                borderRadius: '8px',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Loaded Specs
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  fontFamily: '"Courier New", monospace'
                }}>
                  <div style={{ color: '#94a3b8' }}>
                    Resolution: <span style={{ color: '#e8edf5' }}>{imageWidth} × {imageHeight} px</span>
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    Sensor: <span style={{ color: '#e8edf5' }}>{sensorWidth} × {sensorHeight} mm</span>
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    Focal: <span style={{ color: '#e8edf5' }}>{focalLength} mm</span>
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    Megapixels: <span style={{ color: '#e8edf5' }}>{((imageWidth * imageHeight) / 1000000).toFixed(1)} MP</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Panel */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#3b82f6',
              margin: 0
            }}>
              Results
            </h2>

            {/* GSD Display */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              borderRadius: '12px',
              padding: '2rem',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: '600',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Ground Sampling Distance
              </div>
              <div style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#3b82f6',
                fontFamily: '"Courier New", monospace',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
              }}>
                {gsd ? gsd.toFixed(2) : '—'}
              </div>
              <div style={{
                fontSize: '1.25rem',
                color: '#cbd5e1',
                fontWeight: '600',
                marginTop: '0.5rem'
              }}>
                cm/px
              </div>
            </div>

            {/* Coverage */}
            {coverage && (
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '8px',
                  padding: '1rem',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Image Footprint
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#e8edf5',
                    fontFamily: '"Courier New", monospace'
                  }}>
                    {coverage.width.toFixed(1)} × {coverage.height.toFixed(1)} m
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '8px',
                    padding: '1rem',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Coverage Area
                    </div>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#e8edf5',
                      fontFamily: '"Courier New", monospace'
                    }}>
                      {coverage.area.toFixed(0)} m²
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '8px',
                    padding: '1rem',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Hectares
                    </div>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#e8edf5',
                      fontFamily: '"Courier New", monospace'
                    }}>
                      {coverage.areaHectares.toFixed(3)} ha
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Info */}
            <div style={{
              marginTop: 'auto',
              padding: '1rem',
              background: 'rgba(59, 130, 246, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              fontSize: '0.75rem',
              color: '#94a3b8',
              lineHeight: '1.5'
            }}>
              <strong style={{ color: '#cbd5e1' }}>Note:</strong> GSD represents the distance on the ground that each pixel covers. Lower GSD values indicate higher resolution imagery.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#64748b',
          padding: '2rem 0'
        }}>
          GSD Formula: (Sensor Width × Flight Height × 100) / (Focal Length × Image Width)
        </div>
      </div>
    </div>
  );
}
