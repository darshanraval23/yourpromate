<template>
        <header>
          <nav>
            <div class="nav-new-proj">
              <a href="#" :class="[$store.state.currentComponent == 'MaincontentComponent'? 'active': '']" @click="$store.state.currentComponent = 'MaincontentComponent'">New Project</a>
              <a href="#" :class="[$store.state.currentComponent== 'InprogressComponent'? 'active': '']" @click="$store.state.currentComponent = 'InprogressComponent'">In Progress Project</a>
              <a href="#" :class="[$store.state.currentComponent== 'CompletedComponent'? 'active': '']" @click="$store.state.currentComponent = 'CompletedComponent'">Completed Project</a>
            </div>
          </nav>
        </header>
</template>