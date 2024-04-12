HTMLElement.prototype.nativeValue = function(value) {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value').set;
  nativeInputValueSetter.call(this, value);
  const event = new Event('input', { bubbles: true });
  this.dispatchEvent(event)
}


