<script setup>
import {useDark, useToggle} from "@vueuse/core";
import i18n from "../locales/i18n.js";

const isDark = useDark({
  selector: "body",
  valueDark: "dark",
  valueLight: "light"
});
const toggleDark = useToggle(isDark);

const changeLang = (lang) => {
  localStorage.setItem('language', lang)
  i18n.global.locale.value = lang
}
</script>

<template>
  <nav class="navbar navbar-expand-lg row">
    <div class="container-fluid">
      <div class="col-5 col-md-4 col-lg-2 col-xl-3 col-xxl-2 d-flex justify-content-center">
        <span class="namePortfolio my-5" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">{{ $t('name') }}</span>
      </div>

      <div data-aos="zoom-in" class="d-lg-none col-6 d-flex justify-content-end">
        <svg class="mb-4" @click="toggleDark()" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5466 11.12C23.8964 11.1185 24.2316 10.9797 24.48 10.7333L25.4266 9.78667C25.5662 9.66714 25.6796 9.52005 25.7596 9.35463C25.8396 9.18921 25.8846 9.00903 25.8917 8.8254C25.8988 8.64178 25.8678 8.45867 25.8008 8.28757C25.7338 8.11647 25.6321 7.96107 25.5022 7.83113C25.3722 7.70119 25.2168 7.59952 25.0457 7.53248C24.8746 7.46545 24.6915 7.43451 24.5079 7.4416C24.3243 7.44869 24.1441 7.49367 23.9787 7.5737C23.8132 7.65373 23.6662 7.76709 23.5466 7.90667L22.6666 8.85333C22.4183 9.10315 22.2789 9.44109 22.2789 9.79333C22.2789 10.1456 22.4183 10.4835 22.6666 10.7333C22.9017 10.9671 23.2154 11.105 23.5466 11.12V11.12ZM16 8C16.3536 8 16.6927 7.85952 16.9428 7.60948C17.1928 7.35943 17.3333 7.02029 17.3333 6.66667V5.33333C17.3333 4.97971 17.1928 4.64057 16.9428 4.39052C16.6927 4.14048 16.3536 4 16 4C15.6463 4 15.3072 4.14048 15.0572 4.39052C14.8071 4.64057 14.6666 4.97971 14.6666 5.33333V6.66667C14.6666 7.02029 14.8071 7.35943 15.0572 7.60948C15.3072 7.85952 15.6463 8 16 8ZM5.33329 16H3.99996C3.64634 16 3.3072 16.1405 3.05715 16.3905C2.8071 16.6406 2.66663 16.9797 2.66663 17.3333C2.66663 17.687 2.8071 18.0261 3.05715 18.2761C3.3072 18.5262 3.64634 18.6667 3.99996 18.6667H5.33329C5.68691 18.6667 6.02605 18.5262 6.2761 18.2761C6.52615 18.0261 6.66663 17.687 6.66663 17.3333C6.66663 16.9797 6.52615 16.6406 6.2761 16.3905C6.02605 16.1405 5.68691 16 5.33329 16ZM7.51996 10.7333C7.76831 10.9797 8.10351 11.1185 8.45329 11.12C8.62877 11.121 8.80272 11.0874 8.96517 11.021C9.12762 10.9547 9.27537 10.8569 9.39996 10.7333C9.64829 10.4835 9.78768 10.1456 9.78768 9.79333C9.78768 9.44109 9.64829 9.10315 9.39996 8.85333L8.45329 7.90667C8.19822 7.68823 7.87012 7.57409 7.53455 7.58705C7.19899 7.60001 6.88067 7.73912 6.64321 7.97658C6.40575 8.21404 6.26664 8.53236 6.25368 8.86793C6.24072 9.2035 6.35486 9.5316 6.57329 9.78667L7.51996 10.7333ZM28 16H26.6666C26.313 16 25.9739 16.1405 25.7238 16.3905C25.4738 16.6406 25.3333 16.9797 25.3333 17.3333C25.3333 17.687 25.4738 18.0261 25.7238 18.2761C25.9739 18.5262 26.313 18.6667 26.6666 18.6667H28C28.3536 18.6667 28.6927 18.5262 28.9428 18.2761C29.1928 18.0261 29.3333 17.687 29.3333 17.3333C29.3333 16.9797 29.1928 16.6406 28.9428 16.3905C28.6927 16.1405 28.3536 16 28 16ZM14.6666 25.3333H10.6666C10.313 25.3333 9.97387 25.4738 9.72382 25.7239C9.47377 25.9739 9.33329 26.313 9.33329 26.6667C9.33329 27.0203 9.47377 27.3594 9.72382 27.6095C9.97387 27.8595 10.313 28 10.6666 28H14.6666C15.0202 28 15.3594 27.8595 15.6094 27.6095C15.8595 27.3594 16 27.0203 16 26.6667C16 26.313 15.8595 25.9739 15.6094 25.7239C15.3594 25.4738 15.0202 25.3333 14.6666 25.3333ZM24 20H22.8266C23.1634 19.1514 23.3353 18.2463 23.3333 17.3333C23.3333 15.3884 22.5607 13.5232 21.1854 12.1479C19.8101 10.7726 17.9449 10 16 10C14.055 10 12.1898 10.7726 10.8145 12.1479C9.43924 13.5232 8.66663 15.3884 8.66663 17.3333C8.66459 18.2463 8.83655 19.1514 9.17329 20H7.99996C7.64634 20 7.3072 20.1405 7.05715 20.3905C6.8071 20.6406 6.66663 20.9797 6.66663 21.3333C6.66663 21.687 6.8071 22.0261 7.05715 22.2761C7.3072 22.5262 7.64634 22.6667 7.99996 22.6667H24C24.3536 22.6667 24.6927 22.5262 24.9428 22.2761C25.1928 22.0261 25.3333 21.687 25.3333 21.3333C25.3333 20.9797 25.1928 20.6406 24.9428 20.3905C24.6927 20.1405 24.3536 20 24 20ZM19.8 20H12.2C11.6398 19.2234 11.3367 18.2909 11.3333 17.3333C11.3333 16.0957 11.825 14.9087 12.7001 14.0335C13.5753 13.1583 14.7623 12.6667 16 12.6667C17.2376 12.6667 18.4246 13.1583 19.2998 14.0335C20.175 14.9087 20.6666 16.0957 20.6666 17.3333C20.6632 18.2909 20.3601 19.2234 19.8 20ZM21.3333 25.3333H20C19.6463 25.3333 19.3072 25.4738 19.0572 25.7239C18.8071 25.9739 18.6666 26.313 18.6666 26.6667C18.6666 27.0203 18.8071 27.3594 19.0572 27.6095C19.3072 27.8595 19.6463 28 20 28H21.3333C21.6869 28 22.0261 27.8595 22.2761 27.6095C22.5262 27.3594 22.6666 27.0203 22.6666 26.6667C22.6666 26.313 22.5262 25.9739 22.2761 25.7239C22.0261 25.4738 21.6869 25.3333 21.3333 25.3333Z" fill="var(--header-text)"/>
        </svg>

        <div class="flag">
          <svg v-if="i18n.global.locale.value === 'Eng'" width="22" height="17" viewBox="0 0 513 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_2338)">
              <path d="M0 0.926514H513V342.93H0V0.926514Z" fill="white"/>
              <path d="M288.562 0.923523H224.438V139.86H0V203.985H224.438V342.922H288.562V203.985H513V139.86H288.562V0.923523Z" fill="#D80027"/>
              <path d="M394.554 231.401L513 297.205V231.401H394.554ZM312.261 231.401L513 342.922V311.387L369.026 231.401H312.261ZM459.53 342.922L312.261 261.099V342.922H459.53Z" fill="#0052B4"/>
              <path d="M312.261 231.401L513 342.922V311.387L369.026 231.401H312.261Z" fill="white"/>
              <path d="M312.261 231.401L513 342.922V311.387L369.026 231.401H312.261Z" fill="#D80027"/>
              <path d="M90.5174 231.399L0 281.687V231.399H90.5174ZM200.739 245.58V342.921H25.5408L200.739 245.58Z" fill="#0052B4"/>
              <path d="M143.974 231.401L0 311.387V342.922L200.739 231.401H143.974Z" fill="#D80027"/>
              <path d="M118.446 112.445L0 46.6406V112.445H118.446ZM200.739 112.445L0 0.923523V32.459L143.974 112.445H200.739ZM53.4702 0.923523L200.739 82.747V0.923523H53.4702Z" fill="#0052B4"/>
              <path d="M200.739 112.445L0 0.923523V32.459L143.974 112.445H200.739Z" fill="white"/>
              <path d="M200.739 112.445L0 0.923523V32.459L143.974 112.445H200.739Z" fill="#D80027"/>
              <path d="M422.483 112.447L513 62.1589V112.447H422.483ZM312.261 98.2653V0.9245H487.459L312.261 98.2653Z" fill="#0052B4"/>
              <path d="M369.026 112.445L513 32.459V0.923523L312.261 112.445H369.026Z" fill="#D80027"/>
            </g>
            <defs>
              <clipPath id="clip0_3_2338">
                <rect width="513" height="342" fill="white" transform="translate(0 0.926514)"/>
              </clipPath>
            </defs>
          </svg>

          <svg v-if="i18n.global.locale.value === 'Рус'" width="22" height="17" viewBox="0 0 513 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_2175)">
              <path d="M0 0.986328V342.985H513V0.986328H0Z" fill="white"/>
              <path d="M0 0.989258H513V342.993H0V0.989258Z" fill="#0052B4"/>
              <path d="M0 0.989258H513V114.986H0V0.989258Z" fill="white"/>
              <path d="M0 228.985H513V342.982H0V228.985Z" fill="#D80027"/>
            </g>
            <defs>
              <clipPath id="clip0_3_2175">
                <rect width="513" height="342" fill="white" transform="translate(0 0.989258)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="dropdown d-flex p-0">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{i18n.global.locale.value}}
          </button>
          <ul class="dropdown-menu">
            <li @click="changeLang(locale)" class="ps-3" v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{locale }}</li>
          </ul>
        </div>

        <button data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="var(--header-text)" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>

      <div class="col-12 col-lg-9 col-xl-7 text-center">
        <div class="collapse d-lg-flex justify-content-center ms-lg-5 navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item mt-2" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500">
              <a href="#about" class="list">{{ $t('about') }}</a>
            </li>
            <li class="nav-item mt-2" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="500">
              <a href="#experience" class="list">{{ $t('experience') }}</a>
            </li>
            <li class="nav-item mt-2" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
              <a href="#services" class="list">{{ $t('services') }}</a>
            </li>
            <li class="nav-item mt-2" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="500">
              <a href="#portfolio" class="list">{{ $t('portfolio') }}</a>
            </li>
            <li class="nav-item mt-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
              <a href="#contact" class="list">{{ $t('contact') }}</a>
            </li>
            <div class="flag-lg d-none d-lg-block" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
              <svg v-if="i18n.global.locale.value === 'Eng'" width="22" height="17" viewBox="0 0 513 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_2338)">
                  <path d="M0 0.926514H513V342.93H0V0.926514Z" fill="white"/>
                  <path d="M288.562 0.923523H224.438V139.86H0V203.985H224.438V342.922H288.562V203.985H513V139.86H288.562V0.923523Z" fill="#D80027"/>
                  <path d="M394.554 231.401L513 297.205V231.401H394.554ZM312.261 231.401L513 342.922V311.387L369.026 231.401H312.261ZM459.53 342.922L312.261 261.099V342.922H459.53Z" fill="#0052B4"/>
                  <path d="M312.261 231.401L513 342.922V311.387L369.026 231.401H312.261Z" fill="white"/>
                  <path d="M312.261 231.401L513 342.922V311.387L369.026 231.401H312.261Z" fill="#D80027"/>
                  <path d="M90.5174 231.399L0 281.687V231.399H90.5174ZM200.739 245.58V342.921H25.5408L200.739 245.58Z" fill="#0052B4"/>
                  <path d="M143.974 231.401L0 311.387V342.922L200.739 231.401H143.974Z" fill="#D80027"/>
                  <path d="M118.446 112.445L0 46.6406V112.445H118.446ZM200.739 112.445L0 0.923523V32.459L143.974 112.445H200.739ZM53.4702 0.923523L200.739 82.747V0.923523H53.4702Z" fill="#0052B4"/>
                  <path d="M200.739 112.445L0 0.923523V32.459L143.974 112.445H200.739Z" fill="white"/>
                  <path d="M200.739 112.445L0 0.923523V32.459L143.974 112.445H200.739Z" fill="#D80027"/>
                  <path d="M422.483 112.447L513 62.1589V112.447H422.483ZM312.261 98.2653V0.9245H487.459L312.261 98.2653Z" fill="#0052B4"/>
                  <path d="M369.026 112.445L513 32.459V0.923523L312.261 112.445H369.026Z" fill="#D80027"/>
                </g>
                <defs>
                  <clipPath id="clip0_3_2338">
                    <rect width="513" height="342" fill="white" transform="translate(0 0.926514)"/>
                  </clipPath>
                </defs>
              </svg>

              <svg v-if="i18n.global.locale.value === 'Рус'" width="22" height="17" viewBox="0 0 513 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_2175)">
                  <path d="M0 0.986328V342.985H513V0.986328H0Z" fill="white"/>
                  <path d="M0 0.989258H513V342.993H0V0.989258Z" fill="#0052B4"/>
                  <path d="M0 0.989258H513V114.986H0V0.989258Z" fill="white"/>
                  <path d="M0 228.985H513V342.982H0V228.985Z" fill="#D80027"/>
                </g>
                <defs>
                  <clipPath id="clip0_3_2175">
                    <rect width="513" height="342" fill="white" transform="translate(0 0.989258)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="dropdown p-0 mt-1 d-none d-lg-block" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{i18n.global.locale.value}}
              </button>
              <ul class="dropdown-menu dropdown-menu-lg">
                <li @click="changeLang(locale)" class="ps-3" v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                  {{locale }}</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      <div class="col-1 col-xl-2 col-xxl-2 d-none d-lg-block text-center" data-aos="zoom-in" data-aos-delay="550" data-aos-duration="500">
        <svg class="svg-lg" @click="toggleDark()" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5466 11.12C23.8964 11.1185 24.2316 10.9797 24.48 10.7333L25.4266 9.78667C25.5662 9.66714 25.6796 9.52005 25.7596 9.35463C25.8396 9.18921 25.8846 9.00903 25.8917 8.8254C25.8988 8.64178 25.8678 8.45867 25.8008 8.28757C25.7338 8.11647 25.6321 7.96107 25.5022 7.83113C25.3722 7.70119 25.2168 7.59952 25.0457 7.53248C24.8746 7.46545 24.6915 7.43451 24.5079 7.4416C24.3243 7.44869 24.1441 7.49367 23.9787 7.5737C23.8132 7.65373 23.6662 7.76709 23.5466 7.90667L22.6666 8.85333C22.4183 9.10315 22.2789 9.44109 22.2789 9.79333C22.2789 10.1456 22.4183 10.4835 22.6666 10.7333C22.9017 10.9671 23.2154 11.105 23.5466 11.12V11.12ZM16 8C16.3536 8 16.6927 7.85952 16.9428 7.60948C17.1928 7.35943 17.3333 7.02029 17.3333 6.66667V5.33333C17.3333 4.97971 17.1928 4.64057 16.9428 4.39052C16.6927 4.14048 16.3536 4 16 4C15.6463 4 15.3072 4.14048 15.0572 4.39052C14.8071 4.64057 14.6666 4.97971 14.6666 5.33333V6.66667C14.6666 7.02029 14.8071 7.35943 15.0572 7.60948C15.3072 7.85952 15.6463 8 16 8ZM5.33329 16H3.99996C3.64634 16 3.3072 16.1405 3.05715 16.3905C2.8071 16.6406 2.66663 16.9797 2.66663 17.3333C2.66663 17.687 2.8071 18.0261 3.05715 18.2761C3.3072 18.5262 3.64634 18.6667 3.99996 18.6667H5.33329C5.68691 18.6667 6.02605 18.5262 6.2761 18.2761C6.52615 18.0261 6.66663 17.687 6.66663 17.3333C6.66663 16.9797 6.52615 16.6406 6.2761 16.3905C6.02605 16.1405 5.68691 16 5.33329 16ZM7.51996 10.7333C7.76831 10.9797 8.10351 11.1185 8.45329 11.12C8.62877 11.121 8.80272 11.0874 8.96517 11.021C9.12762 10.9547 9.27537 10.8569 9.39996 10.7333C9.64829 10.4835 9.78768 10.1456 9.78768 9.79333C9.78768 9.44109 9.64829 9.10315 9.39996 8.85333L8.45329 7.90667C8.19822 7.68823 7.87012 7.57409 7.53455 7.58705C7.19899 7.60001 6.88067 7.73912 6.64321 7.97658C6.40575 8.21404 6.26664 8.53236 6.25368 8.86793C6.24072 9.2035 6.35486 9.5316 6.57329 9.78667L7.51996 10.7333ZM28 16H26.6666C26.313 16 25.9739 16.1405 25.7238 16.3905C25.4738 16.6406 25.3333 16.9797 25.3333 17.3333C25.3333 17.687 25.4738 18.0261 25.7238 18.2761C25.9739 18.5262 26.313 18.6667 26.6666 18.6667H28C28.3536 18.6667 28.6927 18.5262 28.9428 18.2761C29.1928 18.0261 29.3333 17.687 29.3333 17.3333C29.3333 16.9797 29.1928 16.6406 28.9428 16.3905C28.6927 16.1405 28.3536 16 28 16ZM14.6666 25.3333H10.6666C10.313 25.3333 9.97387 25.4738 9.72382 25.7239C9.47377 25.9739 9.33329 26.313 9.33329 26.6667C9.33329 27.0203 9.47377 27.3594 9.72382 27.6095C9.97387 27.8595 10.313 28 10.6666 28H14.6666C15.0202 28 15.3594 27.8595 15.6094 27.6095C15.8595 27.3594 16 27.0203 16 26.6667C16 26.313 15.8595 25.9739 15.6094 25.7239C15.3594 25.4738 15.0202 25.3333 14.6666 25.3333ZM24 20H22.8266C23.1634 19.1514 23.3353 18.2463 23.3333 17.3333C23.3333 15.3884 22.5607 13.5232 21.1854 12.1479C19.8101 10.7726 17.9449 10 16 10C14.055 10 12.1898 10.7726 10.8145 12.1479C9.43924 13.5232 8.66663 15.3884 8.66663 17.3333C8.66459 18.2463 8.83655 19.1514 9.17329 20H7.99996C7.64634 20 7.3072 20.1405 7.05715 20.3905C6.8071 20.6406 6.66663 20.9797 6.66663 21.3333C6.66663 21.687 6.8071 22.0261 7.05715 22.2761C7.3072 22.5262 7.64634 22.6667 7.99996 22.6667H24C24.3536 22.6667 24.6927 22.5262 24.9428 22.2761C25.1928 22.0261 25.3333 21.687 25.3333 21.3333C25.3333 20.9797 25.1928 20.6406 24.9428 20.3905C24.6927 20.1405 24.3536 20 24 20ZM19.8 20H12.2C11.6398 19.2234 11.3367 18.2909 11.3333 17.3333C11.3333 16.0957 11.825 14.9087 12.7001 14.0335C13.5753 13.1583 14.7623 12.6667 16 12.6667C17.2376 12.6667 18.4246 13.1583 19.2998 14.0335C20.175 14.9087 20.6666 16.0957 20.6666 17.3333C20.6632 18.2909 20.3601 19.2234 19.8 20ZM21.3333 25.3333H20C19.6463 25.3333 19.3072 25.4738 19.0572 25.7239C18.8071 25.9739 18.6666 26.313 18.6666 26.6667C18.6666 27.0203 18.8071 27.3594 19.0572 27.6095C19.3072 27.8595 19.6463 28 20 28H21.3333C21.6869 28 22.0261 27.8595 22.2761 27.6095C22.5262 27.3594 22.6666 27.0203 22.6666 26.6667C22.6666 26.313 22.5262 25.9739 22.2761 25.7239C22.0261 25.4738 21.6869 25.3333 21.3333 25.3333Z" fill="var(--header-text)"/>
        </svg>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--header-color);
  color: var(--header-text);
}

.list:hover {
  color: var(--gold-to-orange);
  animation-delay: 0.3s;
  cursor: pointer;
}

.namePortfolio {
  font-size: 3rem;
  line-height: 32px;
}

.list {
  margin: 0 25px;
  font-size: 2rem;
  line-height: 3.2rem;
  text-decoration: none;
  color: var(--header-text);
  transition: color .5s linear;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  transition-delay: 0.2s;
  transition-property: color;
}
.dropdown-toggle {
  background: var(--header-color);
  border: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: -20px;
  color: var(--header-text);
}

.dropdown-menu {
  --bs-dropdown-min-width: 67px;
  font-size: 20px;
  margin-top: -10px;
  font-weight: bold;
}

.dropdown-menu-lg {
  margin-top: 0;
}

.dropdown-menu > li:hover {
  background-color: var(--my-orange);
  color: white;
  cursor: pointer;
}

.flag {
  margin-top: 8px;
  margin-left: 10px;
}

.flag-lg {
  margin-top: -1px;
}

svg {
  margin-top: 14px;
}

.navbar-toggler {
  border: none;
  padding: 0;
  margin-left: 20px;
}

.navbar-toggler:focus,
.navbar-toggler:active{
  outline: none;
  box-shadow: none;
}

.navbar-toggler > svg {
  margin: 0;
}

svg {
  cursor: pointer;
}

select:focus {
  outline: 0;
}

.svg-lg {
  margin-top: 4px;
}

.btn-check:checked {
   background-color: var(--header-color);
}
</style>
