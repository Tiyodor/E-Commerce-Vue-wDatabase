<template>
     <div>
      <transition name="slide">
        <div v-if="show" class="sidebar" @click.self="closeSidebar">
          <ul>
            <li class="nav-li" @click="secondary = !secondary">Home</li>
            <li class="nav-li">About</li>
            <li class="nav-li">Contact</li>
          </ul>
        </div>
      </transition>
      <div class="overlay" v-if="show" @click="closeSidebar"></div>
    </div>
</template>