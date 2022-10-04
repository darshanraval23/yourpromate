<template>
    <div >
        <header>
          <nav>
            <div class="nav-new-proj">
              <a href="#" class="active">New Project</a>
              <a href="">In Progress Project</a>
              <a href="">Completed Project</a>
            </div>
          </nav>
        </header>
    </div>
</template>

<style scoped>
.nav-new-proj {
  position: relative;
}

.nav-new-proj a {
  color: var(--bs-light-gray);
  padding: 26px 30px;
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}

.nav-new-proj:after {
  position: absolute;
  content: "";
  height: 2px;
  top: 59px;
  left: 0;
  width: 95%;
  margin: 0 30px;
  background: #e4e4ed;
}

.nav-new-proj .active {
  color: var(--bs-primary);
}

.nav-new-proj .active::before {
  position: absolute;
  content: " ";
  width: 97px;
  height: 2px;
  bottom: 13px;
  /* left: 3; */
  background: #ff8d4f;
  border-radius: 5px;
  z-index: 2;
}

.nav-new-proj .active::after {
  position: absolute;
  font-family: "Font Awesome 6 free";
  content: "";
  font-size: 20px;
  font-stretch: expanded;
  left: 71px;
  bottom: 0px;
  border-radius: 5px;
  z-index: 5;
  color: var(--bs-primary);
}

</style>