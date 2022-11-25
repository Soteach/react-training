import React from 'react';

const Value = ({ value }) => <span className="Counter__value">{value}</span>;

export default Value;
// У даному файлі як і у файлі Controls відбувається "підйом стану"
// ПС коли від батька, вниз до дітей кидаються пропси
