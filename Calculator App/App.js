import React, { useState } from 'react';

const styles = {
  calculatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f3f4f6',
  },
  display: {
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  equation: {
    color: '#666',
    textAlign: 'right',
    fontSize: '14px',
    height: '24px',
  },
  currentValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buttonGrid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    padding: '20px',
  },
  button: {
    border: 'none',
    borderRadius: '8px',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '20px',
    transition: 'background-color 0.2s',
  },
  numberButton: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  operatorButton: {
    backgroundColor: '#e5e7eb',
    '&:hover': {
      backgroundColor: '#d1d5db',
    },
  },
  clearButton: {
    backgroundColor: '#ef4444',
    color: 'white',
    '&:hover': {
      backgroundColor: '#dc2626',
    },
  },
  equalsButton: {
    backgroundColor: '#22c55e',
    color: 'white',
    gridRow: 'span 2',
    '&:hover': {
      backgroundColor: '#16a34a',
    },
  },
  plusButton: {
    gridRow: 'span 2',
  },
  zeroButton: {
    gridColumn: 'span 2',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    color: '#666',
    borderTop: '1px solid #e5e7eb',
  },
};

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (operator) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + operator + ' ');
  };

  const handleEquals = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  const combineStyles = (...styles) => {
    return Object.assign({}, ...styles);
  };

  return (
    <div style={styles.calculatorContainer}>
      <div style={styles.display}>
        <div style={styles.equation}>{equation}</div>
        <div style={styles.currentValue}>{display}</div>
      </div>

      <div style={styles.buttonGrid}>
        <button 
          style={combineStyles(styles.button, styles.clearButton)}
          onClick={handleClear}
        >
          C
        </button>
        <button 
          style={combineStyles(styles.button, styles.operatorButton)}
          onClick={() => handleOperator('/')}
        >
          ÷
        </button>
        <button 
          style={combineStyles(styles.button, styles.operatorButton)}
          onClick={() => handleOperator('*')}
        >
          ×
        </button>
        <button 
          style={combineStyles(styles.button, styles.operatorButton)}
          onClick={() => handleOperator('-')}
        >
          −
        </button>

        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('7')}
        >
          7
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('8')}
        >
          8
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('9')}
        >
          9
        </button>
        <button 
          style={combineStyles(styles.button, styles.operatorButton, styles.plusButton)}
          onClick={() => handleOperator('+')}
        >
          +
        </button>

        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('4')}
        >
          4
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('5')}
        >
          5
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('6')}
        >
          6
        </button>

        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('1')}
        >
          1
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('2')}
        >
          2
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('3')}
        >
          3
        </button>
        <button 
          style={combineStyles(styles.button, styles.equalsButton)}
          onClick={handleEquals}
        >
          =
        </button>

        <button 
          style={combineStyles(styles.button, styles.numberButton, styles.zeroButton)}
          onClick={() => handleNumber('0')}
        >
          0
        </button>
        <button 
          style={combineStyles(styles.button, styles.numberButton)}
          onClick={() => handleNumber('.')}
        >
          .
        </button>
      </div>

      <div style={styles.footer}>
        Calc by Prathamesh
      </div>
    </div>
  );
};

export default Calculator;