# Portfolio Site Prototype

Experimenting with style, libraries and so on

## ztext

Library to implement 3D typography (https://bennettfeely.com/ztext/).



# Random stuff

<div class="nav-burger-container">
  <div class="nav-burger"></div>
</div>
<style>
  .nav-burger-container {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
}

.nav-burger {
  border: 1px solid white;
  width: 22px;
  position: relative;
  border-radius: 1px;
}

.nav-burger:before {
  content: '';
  position: absolute;
  width: 22px;
  border: 1px solid white;
  border-radius: 1px;
  top: -7px;
  left: -1px;
}

.nav-burger:after {
  content: '';
  position: absolute;
  width: 22px;
  border: 1px solid white;
  border-radius: 1px;
  top: 5px;
  left: -1px;
}
</style>