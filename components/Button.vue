<template>
</template>

<script>
exports.Button = {
  render: function(CreateElement) {
    return CreateElement(
      'button',
      {
        style: { 
          backgroundColor: this.background, 
          color: this.color, 
          width: this.width,
          height: this.height
           
        },
        class: {
          customButton: true,
          btn: true
        }
      },
      this.$slots.default
    )
  },
  props: {
    background: String,
    color: String,
    width: String,
    height: String
  }
}
</script>

<style>
.customButton:hover {
  color: white !important;
  background-image: linear-gradient(40deg, #00113d, #0fa79f);
}
.customButton {
  background-color: #00113d;
  color: white;
  padding: 15px;
  border-radius: 6px;
  font-weight: 500;
  height: auto;

}
</style>
