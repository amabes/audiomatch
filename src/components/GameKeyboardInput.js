import React from 'react';

const GameKeyboardInput = ({
  onSubmit,
  loading
}) => {
  const handleCheckOrderedPair = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;

    if (value !== '' && value.length === 2) {
      onSubmit(value);
    }
  };

  return (
    <div className="m-auto">
      <input
        id="keyboardInput"
        name="inputOrderedPair"
        type="text"
        maxLength="2"
        minLength="2"
        className="text-capitalize form-control-lg"
        autoFocus
        disabled={loading}
        onKeyUp={handleCheckOrderedPair}
      />
      <div className="text-muted text-center small">
        Enter ordered pair, ex: A2
      </div>
    </div>
  );
};

export default GameKeyboardInput;
