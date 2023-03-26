function Ship(length) {
  const length = 0;
  const numberofHits = 0;
  const sunk = false;

  const hit = () => {
    hit++;
  };

  const isSunk = () => {
    if (length - numberofHits === 0) {
      return true;
    } else {
      return false;
    }
  };
  return {
    isSunk,
    hit,
  };
}

module.exports(Ship());
