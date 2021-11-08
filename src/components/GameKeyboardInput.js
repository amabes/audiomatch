import React from 'react';

const GameKeyboardInput = ({
  onSubmit,
  loading
}) => {
  const handleCheckOrderedPair = (e) => {
    e.preventDefault();
    const { inputOrderedPair } = e.currentTarget;

    onSubmit(inputOrderedPair.value);
  };

  return (
    <div className="m-auto">
      <form
        onSubmit={handleCheckOrderedPair}
      >
        <input
          id="keyboardInput"
          name="inputOrderedPair"
          type="text"
          maxLength="2"
          minLength="2"
          className="text-capitalize form-control-lg"
          autoFocus
          disabled={loading}
        />
        <div className="text-muted text-center small">
          Enter ordered pair, ex: A2
        </div>
      </form>
    </div>
  );
};

export default GameKeyboardInput;
