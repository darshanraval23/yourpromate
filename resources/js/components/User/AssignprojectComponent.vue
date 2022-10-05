<template>
     <section class="main-assign-detail col-3 mySidenav" id="hide-menu1" :style="{'transform' : $store.state.popuptrogale.projectdetails ? 'translateX(0px)':'translateX(500px)'}">
      <span><i class="toggel-click3 closebtn collaps fa-solid fa-angle-right first"></i></span>
      <div class="assign-detail">
        <div class="assign-dev">
          <h3>Assign project</h3>
          <div class="select-project">
            <h4>Select Project members</h4>
            <!-- --------------------------Select2 Sortable Options------------------ -->
            <div class="inline field">
              <select name="skills" multiple="" class="label ui selection fluid dropdown">
                <option value="">Select members</option>
                <option value="1">Darshan</option>
                <option value="2">Krishna</option>
                <option value="3">Sufiyan</option>
                <option value="4">Narendra</option>
                <option value="5">Jugal</option>
              </select>
            </div>

            <a href="" class="assign-tag-btn">
              <button>
                Submit
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
</template>