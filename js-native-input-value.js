HTMLElement.prototype.nativeValue = function(value) {
  const valueSetter = Object.getOwnPropertyDescriptor(this, 'value').set;
  const prototype = Object.getPrototypeOf(this);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(this, value);
  } else {
    valueSetter.call(this, value);
  }
  this.dispatchEvent(new Event('input', { bubbles: true }));
}
