<script setup>
import InputRange from "./InputRange.vue";
import {saveAs} from 'file-saver';
import axios from "axios";

const downloadItem = (url) => {
  axios.get(url, {responseType: 'blob'})
    .then(response => {
      saveAs(response.data, 'CV.pdf');
    })
}

</script>

<template>
  <div class="row main">
    <div class="col">

      <div class="row d-flex justify-content-center" data-aos="fade-up">
        <div class="col-12 mt-5 text-center text">
          {{ $t('hello') }}
        </div>
        <div class="col-12 mt-2 text-center name">
          {{ $t('fullName') }}
        </div>
        <div class="col-12 mt-2 text-center profession">
          {{ $t('profession') }}
        </div>
      </div>

      <div class="row" data-aos="flip-down" data-aos-delay="300">
        <div class="col d-flex justify-content-center">
          <button @click="downloadItem('CV.pdf')" type="button" class="download-button px-4 m-3 mt-4">{{ $t('downloadCv') }}</button>
          <button class="about-button m-3 mt-4"> {{ $t('aboutMe') }} </button>
        </div>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="400">
        <div class="col d-flex justify-content-center">
          <img src="../assets/bar.png" class="first-image mt-3" width="275" height="275" alt="#">
        </div>
      </div>

      <div class="row my-5">
        <div class="col text-center" data-aos="zoom-in" data-aos-delay="400">
          <div> <span class="title" id="about">{{ $t('aboutMe') }}</span> </div>
          <div> <span class="title-info">{{ $t('myIntro') }}</span> </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-11 col-xl-8 mt-5">
          <div class="row">
            <div class="col-12 col-md-6 text-center text-xl-start" data-aos="flip-left">
              <img src="../assets/baz.png" class="second-image mt-3" width="275" height="275" alt="#">
            </div>
            <div class="col-12 col-md-6 text-center" data-aos="zoom-in-right" data-aos-delay="300">
              <div class="row">
                <div class="col-12 mt-4 mt-md-0">
                  <p class="info-about-user">
                    {{ $t('myStory.1') }}
                  </p>
                  <p class="motto pt-2">
                    {{ $t('myStory.2') }}
                  </p>
                  <p class="motto">
                    {{ $t('myStory.3') }}
                  </p>
                  <p class="motto pb-3">
                    {{ $t('myStory.4') }}
                  </p>
                </div>
                <div class="col d-flex justify-content-between  gap-4 gap-md-2 gap-lg-3">
                  <div class="card text-center mt-5" style="width: 130px;" data-aos="fade-in">
                    <div class="card-content">
                      <svg class="card-title" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.5H16V5.5C16 4.70435 15.6839 3.94129 15.1213 3.37868C14.5587 2.81607 13.7956 2.5 13 2.5H11C10.2044 2.5 9.44129 2.81607 8.87868 3.37868C8.31607 3.94129 8 4.70435 8 5.5V6.5H5C4.20435 6.5 3.44129 6.81607 2.87868 7.37868C2.31607 7.94129 2 8.70435 2 9.5V18.5C2 19.2956 2.31607 20.0587 2.87868 20.6213C3.44129 21.1839 4.20435 21.5 5 21.5H19C19.7956 21.5 20.5587 21.1839 21.1213 20.6213C21.6839 20.0587 22 19.2956 22 18.5V9.5C22 8.70435 21.6839 7.94129 21.1213 7.37868C20.5587 6.81607 19.7956 6.5 19 6.5ZM10 5.5C10 5.23478 10.1054 4.98043 10.2929 4.79289C10.4804 4.60536 10.7348 4.5 11 4.5H13C13.2652 4.5 13.5196 4.60536 13.7071 4.79289C13.8946 4.98043 14 5.23478 14 5.5V6.5H10V5.5ZM20 18.5C20 18.7652 19.8946 19.0196 19.7071 19.2071C19.5196 19.3946 19.2652 19.5 19 19.5H5C4.73478 19.5 4.48043 19.3946 4.29289 19.2071C4.10536 19.0196 4 18.7652 4 18.5V13C4.97544 13.3869 5.97818 13.7011 7 13.94V14.53C7 14.7952 7.10536 15.0496 7.29289 15.2371C7.48043 15.4246 7.73478 15.53 8 15.53C8.26522 15.53 8.51957 15.4246 8.70711 15.2371C8.89464 15.0496 9 14.7952 9 14.53V14.32C9.99435 14.4554 10.9965 14.5255 12 14.53C13.0035 14.5255 14.0057 14.4554 15 14.32V14.53C15 14.7952 15.1054 15.0496 15.2929 15.2371C15.4804 15.4246 15.7348 15.53 16 15.53C16.2652 15.53 16.5196 15.4246 16.7071 15.2371C16.8946 15.0496 17 14.7952 17 14.53V13.94C18.0218 13.7011 19.0246 13.3869 20 13V18.5ZM20 10.81C19.0274 11.2205 18.0244 11.5548 17 11.81V11.5C17 11.2348 16.8946 10.9804 16.7071 10.7929C16.5196 10.6054 16.2652 10.5 16 10.5C15.7348 10.5 15.4804 10.6054 15.2929 10.7929C15.1054 10.9804 15 11.2348 15 11.5V12.24C13.0113 12.54 10.9887 12.54 9 12.24V11.5C9 11.2348 8.89464 10.9804 8.70711 10.7929C8.51957 10.6054 8.26522 10.5 8 10.5C7.73478 10.5 7.48043 10.6054 7.29289 10.7929C7.10536 10.9804 7 11.2348 7 11.5V11.83C5.97562 11.5748 4.9726 11.2405 4 10.83V9.5C4 9.23478 4.10536 8.98043 4.29289 8.79289C4.48043 8.60536 4.73478 8.5 5 8.5H19C19.2652 8.5 19.5196 8.60536 19.7071 8.79289C19.8946 8.98043 20 9.23478 20 9.5V10.81Z" fill="#FFA97A"/>
                      </svg>
                      <div class="card-text-1">{{ $t('completed') }}</div>
                      <div class="card-text-2 mb-2">10 + {{ $t('projects') }}</div>
                    </div>
                  </div>

                  <div class="card text-center mt-5" style="width: 130px;" data-aos="fade-in" data-aos-delay="300">
                    <div class="card-content">
                      <svg class="card-title" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21.1313 10 21.2614 9.97419 21.3827 9.92395C21.5041 9.8737 21.6143 9.80005 21.7072 9.70718C21.8 9.61432 21.8737 9.50406 21.9239 9.38272C21.9742 9.26138 22 9.13133 22 9V6C22.0001 5.79017 21.9341 5.58565 21.8114 5.41544C21.6887 5.24524 21.5155 5.11799 21.3164 5.05176L12.3164 2.05176C12.111 1.9834 11.889 1.9834 11.6836 2.05176L2.68359 5.05176C2.48449 5.11799 2.31131 5.24524 2.18861 5.41544C2.0659 5.58565 1.99991 5.79017 2 6V9C1.99997 9.13133 2.02581 9.26138 2.07605 9.38272C2.12629 9.50406 2.19995 9.61432 2.29282 9.70718C2.38568 9.80005 2.49594 9.8737 2.61728 9.92395C2.73862 9.97419 2.86867 10 3 10H4V17.1843C3.41674 17.3897 2.91137 17.7707 2.55327 18.2748C2.19517 18.779 2.0019 19.3816 2 20V22C1.99997 22.1313 2.02581 22.2614 2.07605 22.3827C2.12629 22.5041 2.19995 22.6143 2.29282 22.7072C2.38568 22.8 2.49594 22.8737 2.61728 22.9239C2.73862 22.9742 2.86867 23 3 23H21C21.1313 23 21.2614 22.9742 21.3827 22.9239C21.5041 22.8737 21.6143 22.8 21.7072 22.7072C21.8 22.6143 21.8737 22.5041 21.9239 22.3827C21.9742 22.2614 22 22.1313 22 22V20C21.9981 19.3816 21.8048 18.779 21.4467 18.2748C21.0886 17.7707 20.5833 17.3897 20 17.1843V10H21ZM20 21H4V20C4.00026 19.7349 4.10571 19.4807 4.29319 19.2932C4.48066 19.1057 4.73486 19.0003 5 19H19C19.2651 19.0003 19.5193 19.1057 19.7068 19.2932C19.8943 19.4807 19.9997 19.7349 20 20V21ZM6 17V10H8V17H6ZM10 17V10H14V17H10ZM16 17V10H18V17H16ZM4 8V6.7207L12 4.0537L20 6.7207V8H4Z" fill="#FFA97A"/>
                      </svg>

                      <div class="card-text-1">{{ $t('worked') }}</div>
                      <div class="card-text-2 mb-2">Kadirov.Dev LLC</div>
                    </div>
                  </div>

                  <div class="card text-center mt-5" style="width: 130px;" data-aos="fade-in" data-aos-delay="500">
                    <div class="card-content">
                      <svg class="card-title" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 9H10C9.73478 9 9.48043 9.10536 9.29289 9.29289C9.10536 9.48043 9 9.73478 9 10V22C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22V10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9ZM13 21H11V11H13V21ZM22 1H18C17.7348 1 17.4804 1.10536 17.2929 1.29289C17.1054 1.48043 17 1.73478 17 2V22C17 22.2652 17.1054 22.5196 17.2929 22.7071C17.4804 22.8946 17.7348 23 18 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V2C23 1.73478 22.8946 1.48043 22.7071 1.29289C22.5196 1.10536 22.2652 1 22 1ZM21 21H19V3H21V21ZM6 15H2C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H6C6.26522 23 6.51957 22.8946 6.70711 22.7071C6.89464 22.5196 7 22.2652 7 22V16C7 15.7348 6.89464 15.4804 6.70711 15.2929C6.51957 15.1054 6.26522 15 6 15ZM5 21H3V17H5V21Z" fill="#FFA97A"/>
                      </svg>
                      <div class="card-text-1 mt-1">{{ $t('experienced') }}</div>
                      <div class="card-text-2 mb-2">1 + {{ $t('year') }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center text-md-start mt-4" data-aos="flip-down">
                  <router-link to="/contact">
                    <button @click="$router.push('/contact')" role="link" class="about-button cnc-btn mt-4"> {{ $t('contactMe') }} </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5" data-aos="zoom-in-up">
        <div class="col mt-5 text-center">
          <div> <span class="title" id="experience">{{ $t('myExperience') }}</span> </div>
          <div> <span class="title-info">{{ $t('myAbilities') }}</span> </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex justify-content-center" data-aos="fade-up">
          <span class="experience-text mt-3" id=text>{{ $t('percentageInfo') }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="row groups-card d-flex justify-content-center">
            <div class="col-12 mt-5 experience-card" data-aos="flip-left">
              <div class="experience-card-title"> {{ $t('frontendDevelopment') }}  </div>
              <div class="experience-card-description"> {{ $t('plusOneYear') }} </div>

              <div class="experience-title">HTML</div>
              <InputRange progress="90"/>

              <div class="experience-title mt-4">CSS</div>
              <InputRange progress="80"/>

              <div class="experience-title ms-1 mt-4">JavaScript</div>
              <InputRange progress="80"/>

              <div class="experience-title mt-4">Bootstrap</div>
              <InputRange progress="90"/>

              <div class="experience-title mt-4">Vue.js</div>
              <InputRange progress="90"/>

              <div class="experience-title mt-4">React.js</div>
              <InputRange progress="50"/>
            </div>

            <div class="col-12 mt-5 experience-card" data-aos="flip-right">
              <div class="experience-card-title"> {{ $t('backDevelopment') }} </div>
              <div class="experience-card-description"> {{ $t('plusOneYear') }} </div>

              <div class="experience-title">Symfony</div>
              <InputRange progress="60"/>

              <div class="experience-title mt-4">PHP</div>
              <InputRange progress="55"/>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col mt-5 text-center">
          <div> <span class="title" id="services">{{ $t('myOffer') }}</span> </div>
          <div> <span class="title-info">{{ $t('myServices') }}</span> </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex justify-content-center">

          <div class="row groups-card  d-flex justify-content-center">
            <div class="col-12 mt-5 experience-card" data-aos="flip-up">
              <div>
                <svg class="checked-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2667 7.32496L8.69166 10.9083L7.31666 9.53329C7.24195 9.44606 7.15002 9.37521 7.04663 9.32519C6.94325 9.27517 6.83064 9.24706 6.71587 9.24263C6.60111 9.23819 6.48666 9.25753 6.37972 9.29943C6.27279 9.34132 6.17566 9.40487 6.09445 9.48608C6.01324 9.5673 5.94969 9.66442 5.9078 9.77136C5.8659 9.87829 5.84656 9.99274 5.85099 10.1075C5.85543 10.2223 5.88354 10.3349 5.93356 10.4383C5.98357 10.5417 6.05443 10.6336 6.14166 10.7083L8.09999 12.675C8.17786 12.7522 8.27021 12.8133 8.37174 12.8548C8.47327 12.8962 8.58199 12.9173 8.69166 12.9166C8.91028 12.9157 9.11978 12.8289 9.27499 12.675L13.4417 8.50829C13.5198 8.43082 13.5818 8.33866 13.6241 8.23711C13.6664 8.13556 13.6882 8.02664 13.6882 7.91663C13.6882 7.80662 13.6664 7.69769 13.6241 7.59615C13.5818 7.4946 13.5198 7.40243 13.4417 7.32496C13.2855 7.16975 13.0743 7.08263 12.8542 7.08263C12.634 7.08263 12.4228 7.16975 12.2667 7.32496ZM9.99999 1.66663C8.35182 1.66663 6.74065 2.15537 5.37024 3.07105C3.99983 3.98672 2.93173 5.28821 2.301 6.81093C1.67027 8.33365 1.50524 10.0092 1.82678 11.6257C2.14833 13.2422 2.942 14.7271 4.10744 15.8925C5.27287 17.058 6.75773 17.8516 8.37424 18.1732C9.99075 18.4947 11.6663 18.3297 13.189 17.699C14.7117 17.0682 16.0132 16.0001 16.9289 14.6297C17.8446 13.2593 18.3333 11.6481 18.3333 9.99996C18.3333 8.90561 18.1178 7.82198 17.699 6.81093C17.2802 5.79988 16.6664 4.88122 15.8925 4.1074C15.1187 3.33358 14.2001 2.71975 13.189 2.30096C12.178 1.88217 11.0943 1.66663 9.99999 1.66663ZM9.99999 16.6666C8.68145 16.6666 7.39252 16.2756 6.29619 15.5431C5.19986 14.8105 4.34538 13.7694 3.8408 12.5512C3.33621 11.333 3.20419 9.99256 3.46143 8.69936C3.71866 7.40615 4.3536 6.21826 5.28595 5.28591C6.2183 4.35356 7.40619 3.71863 8.69939 3.46139C9.9926 3.20416 11.333 3.33618 12.5512 3.84076C13.7694 4.34535 14.8106 5.19983 15.5431 6.29616C16.2757 7.39249 16.6667 8.68142 16.6667 9.99996C16.6667 11.7681 15.9643 13.4638 14.714 14.714C13.4638 15.9642 11.7681 16.6666 9.99999 16.6666Z" fill="#FFA97A"/>
                </svg>
                <span class="offer-title ps-2">{{ $t('service.title1') }}</span>
              </div>
              <p class="offer-description mt-2">
                {{ $t('service.description1') }}
              </p>
              <div class="d-flex justify-content-end">
                <button @click="$router.push('/contact')" class="contact-button px-3 me-5 mt-4"> {{$t('contactMe')}} </button>
              </div>
            </div>

            <div class="col-12 mt-5 experience-card" data-aos="flip-down" style="position: relative">
              <div>
                <svg class="checked-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2667 7.32496L8.69166 10.9083L7.31666 9.53329C7.24195 9.44606 7.15002 9.37521 7.04663 9.32519C6.94325 9.27517 6.83064 9.24706 6.71587 9.24263C6.60111 9.23819 6.48666 9.25753 6.37972 9.29943C6.27279 9.34132 6.17566 9.40487 6.09445 9.48608C6.01324 9.5673 5.94969 9.66442 5.9078 9.77136C5.8659 9.87829 5.84656 9.99274 5.85099 10.1075C5.85543 10.2223 5.88354 10.3349 5.93356 10.4383C5.98357 10.5417 6.05443 10.6336 6.14166 10.7083L8.09999 12.675C8.17786 12.7522 8.27021 12.8133 8.37174 12.8548C8.47327 12.8962 8.58199 12.9173 8.69166 12.9166C8.91028 12.9157 9.11978 12.8289 9.27499 12.675L13.4417 8.50829C13.5198 8.43082 13.5818 8.33866 13.6241 8.23711C13.6664 8.13556 13.6882 8.02664 13.6882 7.91663C13.6882 7.80662 13.6664 7.69769 13.6241 7.59615C13.5818 7.4946 13.5198 7.40243 13.4417 7.32496C13.2855 7.16975 13.0743 7.08263 12.8542 7.08263C12.634 7.08263 12.4228 7.16975 12.2667 7.32496ZM9.99999 1.66663C8.35182 1.66663 6.74065 2.15537 5.37024 3.07105C3.99983 3.98672 2.93173 5.28821 2.301 6.81093C1.67027 8.33365 1.50524 10.0092 1.82678 11.6257C2.14833 13.2422 2.942 14.7271 4.10744 15.8925C5.27287 17.058 6.75773 17.8516 8.37424 18.1732C9.99075 18.4947 11.6663 18.3297 13.189 17.699C14.7117 17.0682 16.0132 16.0001 16.9289 14.6297C17.8446 13.2593 18.3333 11.6481 18.3333 9.99996C18.3333 8.90561 18.1178 7.82198 17.699 6.81093C17.2802 5.79988 16.6664 4.88122 15.8925 4.1074C15.1187 3.33358 14.2001 2.71975 13.189 2.30096C12.178 1.88217 11.0943 1.66663 9.99999 1.66663ZM9.99999 16.6666C8.68145 16.6666 7.39252 16.2756 6.29619 15.5431C5.19986 14.8105 4.34538 13.7694 3.8408 12.5512C3.33621 11.333 3.20419 9.99256 3.46143 8.69936C3.71866 7.40615 4.3536 6.21826 5.28595 5.28591C6.2183 4.35356 7.40619 3.71863 8.69939 3.46139C9.9926 3.20416 11.333 3.33618 12.5512 3.84076C13.7694 4.34535 14.8106 5.19983 15.5431 6.29616C16.2757 7.39249 16.6667 8.68142 16.6667 9.99996C16.6667 11.7681 15.9643 13.4638 14.714 14.714C13.4638 15.9642 11.7681 16.6666 9.99999 16.6666Z" fill="#FFA97A"/>
                </svg>
                <span class="offer-title ps-2">{{ $t('service.title2') }}</span>
              </div>
              <p class="offer-description mt-3 mb-5">
                {{ $t('service.description2') }}
              </p>
              <div class="d-flex justify-content-end">
                <button @click="$router.push('/contact')" class="contact-button px-3 me-5" style="position: absolute; bottom: 22px"> {{$t('contactMe')}} </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col mt-5 text-center">
          <div> <span class="title" id="portfolio">{{ $t('recentWorks') }}</span> </div>
          <div> <span class="title-info">{{ $t('myPortfolio') }}</span> </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-10 col-md-12 col-lg-10 col-xl-8 col-xxl-7 d-flex justify-content-center">

          <div class="row gap-lg-5 d-flex justify-content-center">
            <div class="col-12 mt-5 me-md-5 project-card" data-aos="zoom-in">
              <span class="offer-title">{{ $t('project.title1') }}</span>
              <img class="project-img" src="../assets/foo.png" width="265" alt="Abdullokh Project"/>
              <div>
                <a class="btn view-button px-3 me-4 mt-5" href="https://book-app-green.vercel.app/" role="button"> {{ $t('project.viewMore') }} </a>
              </div>
            </div>

            <div class="col-12 mt-5 project-card" data-aos="zoom-in"  data-aos-delay="100">
              <span class="offer-title">{{ $t('project.title2') }}</span>
              <img class="project-img" src="../assets/lavia.png" width="265" alt="Abdullokh Project"/>
              <div>
                <a class="btn view-button px-3 me-4 mt-4" href="https://education-center-two.vercel.app/" role="button"> {{ $t('project.viewMore') }} </a>
              </div>
            </div>

            <div class="col-12 mt-5 me-md-5 project-card" data-aos="zoom-in" data-aos-delay="200">
              <div class="experience-card-title">
                <span class="offer-title">{{ $t('project.title3') }}</span>
                <img class="project-img" src="../assets/oluy.png" width="265" alt="Abdullokh Project"/>
                <div>
                  <a class="btn view-button px-3 me-4 mt-4" href="https://buy-house-app.vercel.app/" role="button"> {{ $t('project.viewMore') }} </a>
                </div>
              </div>
            </div>

            <div class="col-12 mt-5 project-card" data-aos="zoom-in" data-aos-delay="300">
              <span class="offer-title">{{ $t('project.title4') }}</span>
              <img class="project-img" src="../assets/cottage.jpg" width="265" alt="Abdullokh Project"/>
              <div>
                <a class="btn view-button px-3 me-4 mt-4" href="https://cottage-app-ashy.vercel.app/" role="button"> {{ $t('project.viewMore') }} </a>
              </div>
            </div>

            <div class="col-12 mt-5 me-md-5 project-card" data-aos="zoom-in" data-aos-delay="400">
              <div class="experience-card-title">
                <span class="offer-title">{{ $t('project.title5') }}</span>
                <img class="project-img" src="../assets/library.jpg" width="265" alt="Abdullokh Project"/>
                <div>
                  <a class="btn view-button px-3 me-4 mt-5" href="https://book-vert.vercel.app/" role="button"> {{ $t('project.viewMore') }} </a>
                </div>
              </div>
            </div>

            <div class="col-12 mt-5 project-card" data-aos="zoom-in" data-aos-delay="500">
              <div class="experience-card-title">
                <span class="offer-title">{{ $t('project.title6') }}</span>
                <img class="project-img" src="../assets/userlist.png" width="265" alt="Abdullokh Project"/>
                <div>
                  <a class="btn view-button px-3 me-4 mt-4" href="https://labmedia-task.vercel.app/" role="button"> {{ $t('project.viewMore') }} </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="row my-5">
        <div class="col mt-5 text-center" data-aos="fade-in">
          <div> <span class="title" id="contact">{{ $t('contactMe') }}</span> </div>
          <div> <span class="title-info">{{ $t('getInTouch') }} </span> </div>
        </div>

        <div class="col-12 mt-5 gap-3 gap-sm-5 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="300">
          <a target="_blank" href="https://t.me/Abdullokh_dev" class="contact-bar tg">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2647 2.42778C21.98 2.19091 21.6364 2.03567 21.2704 1.97858C20.9045 1.92149 20.5299 1.96469 20.1866 2.10357L2.26566 9.33892C1.88241 9.4966 1.55618 9.76711 1.33026 10.1145C1.10434 10.462 0.989427 10.8699 1.00076 11.2841C1.0121 11.6984 1.14916 12.0994 1.39374 12.434C1.63832 12.7685 1.97886 13.0208 2.37016 13.1573L5.99516 14.418L8.01566 21.0997C8.04312 21.1889 8.08297 21.2739 8.13404 21.352C8.14179 21.364 8.15272 21.373 8.16096 21.3846C8.21996 21.467 8.29127 21.5397 8.37239 21.6004C8.39546 21.618 8.41755 21.6345 8.44221 21.6501C8.53714 21.7131 8.64228 21.7591 8.75294 21.7862L8.76478 21.7872L8.77149 21.7901C8.83802 21.8036 8.90574 21.8105 8.97364 21.8106C8.98017 21.8106 8.98597 21.8074 8.99244 21.8073C9.0949 21.8055 9.19647 21.7879 9.29353 21.755C9.31611 21.7473 9.33546 21.7345 9.35737 21.7252C9.42975 21.6952 9.49832 21.6567 9.56166 21.6106C9.61238 21.5679 9.66312 21.5251 9.71388 21.4824L12.416 18.4991L16.4463 21.6211C16.8011 21.8974 17.2379 22.0475 17.6875 22.0479C18.1587 22.0473 18.6154 21.8847 18.9809 21.5874C19.3465 21.2901 19.5987 20.8762 19.6954 20.4151L22.958 4.39849C23.032 4.03801 23.0065 3.66421 22.8844 3.31708C22.7623 2.96995 22.5481 2.66255 22.2647 2.42778V2.42778ZM9.37016 14.7364C9.2315 14.8745 9.13672 15.0505 9.0977 15.2422L8.78819 16.7462L8.00413 14.1532L12.0694 12.0362L9.37016 14.7364ZM17.6719 20.0401L12.9092 16.3506C12.71 16.1966 12.46 16.1234 12.2092 16.1455C11.9583 16.1675 11.725 16.2833 11.5557 16.4697L10.6903 17.4249L10.9961 15.9385L18.0791 8.85549C18.2482 8.68665 18.3512 8.46285 18.3695 8.22461C18.3878 7.98638 18.3201 7.74947 18.1788 7.55681C18.0375 7.36414 17.8319 7.22845 17.5992 7.17433C17.3664 7.1202 17.122 7.15121 16.9102 7.26174L6.74491 12.5544L3.02055 11.1915L20.999 3.99905L17.6719 20.0401Z" fill="#FFA97A"/>
            </svg>
          </a>

          <a target="_blank" href="https://www.instagram.com/Abdullokh_dev/" class="contact-bar inst" data-aos="fade-in" data-aos-delay="400">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.9 9.09992C28.5044 9.09992 28.1177 9.21722 27.7888 9.43698C27.4599 9.65674 27.2036 9.9691 27.0522 10.3346C26.9008 10.7 26.8612 11.1021 26.9384 11.4901C27.0156 11.8781 27.2061 12.2344 27.4858 12.5141C27.7655 12.7938 28.1218 12.9843 28.5098 13.0615C28.8978 13.1387 29.2999 13.0991 29.6653 12.9477C30.0308 12.7963 30.3432 12.54 30.5629 12.2111C30.7827 11.8822 30.9 11.4955 30.9 11.0999C30.9 10.5695 30.6893 10.0608 30.3142 9.68571C29.9391 9.31063 29.4304 9.09992 28.9 9.09992ZM36.5667 13.1333C36.5342 11.7504 36.2752 10.3823 35.8 9.08325C35.3762 7.97181 34.7166 6.96538 33.8666 6.13325C33.0414 5.27896 32.0326 4.62355 30.9166 4.21659C29.6211 3.72685 28.2514 3.46194 26.8666 3.43325C25.1 3.33325 24.5333 3.33325 20 3.33325C15.4666 3.33325 14.9 3.33325 13.1333 3.43325C11.7486 3.46194 10.3789 3.72685 9.08331 4.21659C7.96944 4.62767 6.96154 5.28252 6.13331 6.13325C5.27902 6.95855 4.62361 7.96732 4.21665 9.08325C3.72691 10.3788 3.462 11.7485 3.43331 13.1333C3.33331 14.8999 3.33331 15.4666 3.33331 19.9999C3.33331 24.5333 3.33331 25.0999 3.43331 26.8666C3.462 28.2513 3.72691 29.621 4.21665 30.9166C4.62361 32.0325 5.27902 33.0413 6.13331 33.8666C6.96154 34.7173 7.96944 35.3722 9.08331 35.7833C10.3789 36.273 11.7486 36.5379 13.1333 36.5666C14.9 36.6666 15.4666 36.6666 20 36.6666C24.5333 36.6666 25.1 36.6666 26.8666 36.5666C28.2514 36.5379 29.6211 36.273 30.9166 35.7833C32.0326 35.3763 33.0414 34.7209 33.8666 33.8666C34.7204 33.0376 35.3805 32.0302 35.8 30.9166C36.2752 29.6176 36.5342 28.2494 36.5667 26.8666C36.5667 25.0999 36.6666 24.5333 36.6666 19.9999C36.6666 15.4666 36.6666 14.8999 36.5667 13.1333ZM33.5666 26.6666C33.5545 27.7245 33.3629 28.7728 33 29.7666C32.7339 30.4919 32.3064 31.1473 31.75 31.6833C31.2094 32.2341 30.5554 32.6606 29.8333 32.9333C28.8395 33.2962 27.7913 33.4878 26.7333 33.4999C25.0666 33.5833 24.45 33.5999 20.0666 33.5999C15.6833 33.5999 15.0666 33.5999 13.4 33.4999C12.3015 33.5205 11.2076 33.3513 10.1666 32.9999C9.47628 32.7134 8.85224 32.2879 8.33331 31.7499C7.78013 31.2145 7.35805 30.5586 7.09998 29.8333C6.69307 28.8252 6.46739 27.7532 6.43331 26.6666C6.43331 24.9999 6.33331 24.3833 6.33331 19.9999C6.33331 15.6166 6.33331 14.9999 6.43331 13.3333C6.44078 12.2517 6.63823 11.1798 7.01665 10.1666C7.31006 9.4631 7.76042 8.83602 8.33331 8.33325C8.83967 7.7602 9.46546 7.30508 10.1666 6.99992C11.1826 6.63332 12.2533 6.44172 13.3333 6.43325C15 6.43325 15.6166 6.33325 20 6.33325C24.3833 6.33325 25 6.33325 26.6666 6.43325C27.7246 6.44539 28.7728 6.637 29.7666 6.99992C30.524 7.28101 31.2038 7.738 31.75 8.33325C32.2962 8.84522 32.7229 9.47114 33 10.1666C33.3704 11.1815 33.5621 12.2529 33.5666 13.3333C33.65 14.9999 33.6666 15.6166 33.6666 19.9999C33.6666 24.3833 33.65 24.9999 33.5666 26.6666ZM20 11.4499C18.3097 11.4532 16.6583 11.9575 15.2544 12.8989C13.8506 13.8404 12.7573 15.1769 12.1127 16.7395C11.4681 18.3021 11.3012 20.0207 11.633 21.6781C11.9648 23.3356 12.7804 24.8575 13.9768 26.0515C15.1732 27.2456 16.6967 28.0583 18.3547 28.3868C20.0128 28.7154 21.7311 28.5451 23.2924 27.8975C24.8538 27.2499 26.1881 26.154 27.1269 24.7483C28.0656 23.3426 28.5666 21.6902 28.5666 19.9999C28.5689 18.8751 28.3487 17.7609 27.9187 16.7215C27.4888 15.6821 26.8576 14.7379 26.0614 13.9433C25.2653 13.1487 24.3199 12.5194 23.2796 12.0915C22.2394 11.6636 21.1248 11.4455 20 11.4499ZM20 25.5499C18.9023 25.5499 17.8293 25.2244 16.9166 24.6146C16.0039 24.0047 15.2925 23.1379 14.8724 22.1238C14.4524 21.1097 14.3425 19.9938 14.5566 18.9172C14.7708 17.8406 15.2994 16.8517 16.0755 16.0755C16.8517 15.2993 17.8406 14.7707 18.9172 14.5566C19.9938 14.3424 21.1097 14.4523 22.1239 14.8724C23.138 15.2925 24.0048 16.0038 24.6146 16.9165C25.2245 17.8292 25.55 18.9022 25.55 19.9999C25.55 20.7288 25.4064 21.4505 25.1275 22.1238C24.8486 22.7972 24.4398 23.409 23.9244 23.9244C23.4091 24.4397 22.7972 24.8485 22.1239 25.1275C21.4505 25.4064 20.7288 25.5499 20 25.5499Z" fill="#FFA97A"/>
            </svg>
          </a>

          <a href="mailto:abdulloh3525dev@gmail.com" class="contact-bar mail" data-aos="fade-in" data-aos-delay="500">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 13.3334C34.558 13.3334 34.134 13.509 33.8215 13.8216C33.5089 14.1341 33.3333 14.5581 33.3333 15.0001V28.3334C33.3333 28.7754 33.1577 29.1994 32.8452 29.5119C32.5326 29.8245 32.1087 30.0001 31.6666 30.0001H8.33331C7.89129 30.0001 7.46736 29.8245 7.1548 29.5119C6.84224 29.1994 6.66665 28.7754 6.66665 28.3334V12.3501L16.4666 22.1501C17.4042 23.0864 18.675 23.6123 20 23.6123C21.325 23.6123 22.5958 23.0864 23.5333 22.1501L29.5166 16.1834C29.8305 15.8696 30.0068 15.4439 30.0068 15.0001C30.0068 14.5562 29.8305 14.1306 29.5166 13.8167C29.2028 13.5029 28.7772 13.3266 28.3333 13.3266C27.8895 13.3266 27.4638 13.5029 27.15 13.8167L21.1833 19.8001C21.0284 19.9563 20.844 20.0803 20.6409 20.1649C20.4378 20.2495 20.22 20.2931 20 20.2931C19.78 20.2931 19.5621 20.2495 19.359 20.1649C19.1559 20.0803 18.9716 19.9563 18.8166 19.8001L9.01665 10.0001H21.6666C22.1087 10.0001 22.5326 9.82449 22.8452 9.51193C23.1577 9.19936 23.3333 8.77544 23.3333 8.33341C23.3333 7.89139 23.1577 7.46746 22.8452 7.1549C22.5326 6.84234 22.1087 6.66675 21.6666 6.66675H8.33331C7.00723 6.66675 5.73546 7.19353 4.79778 8.13121C3.8601 9.0689 3.33331 10.3407 3.33331 11.6667V28.3334C3.33331 29.6595 3.8601 30.9313 4.79778 31.8689C5.73546 32.8066 7.00723 33.3334 8.33331 33.3334H31.6666C32.9927 33.3334 34.2645 32.8066 35.2022 31.8689C36.1399 30.9313 36.6666 29.6595 36.6666 28.3334V15.0001C36.6666 14.5581 36.4911 14.1341 36.1785 13.8216C35.8659 13.509 35.442 13.3334 35 13.3334ZM28.3333 10.0001H35C35.442 10.0001 35.8659 9.82449 36.1785 9.51193C36.4911 9.19936 36.6666 8.77544 36.6666 8.33341C36.6666 7.89139 36.4911 7.46746 36.1785 7.1549C35.8659 6.84234 35.442 6.66675 35 6.66675H28.3333C27.8913 6.66675 27.4674 6.84234 27.1548 7.1549C26.8422 7.46746 26.6666 7.89139 26.6666 8.33341C26.6666 8.77544 26.8422 9.19936 27.1548 9.51193C27.4674 9.82449 27.8913 10.0001 28.3333 10.0001Z" fill="#FFA97A"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #111A20;
}
.text, .name {
  color: var(--my-text-color);
  line-height: 32px;
}

.profession {
  line-height: 32px;
}

.profession {
  color: var(--my-orange);
}

.text {
  font-weight: 500;
  font-size: 1.7rem;
}

.name {
  font-weight: 800;
  font-size: 4rem;
  line-height: 4rem;
}

.profession {
  font-weight: 600;
  font-size: 1.4rem;
}

button {
  height: 51px;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  border-radius: 5px;
}

.download-button {
  color: var(--my-text-color);
  border: 1px solid var(--my-orange);
  background: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.about-button, .cnc-btn {
  border: none;
  background-color: var(--my-orange);
  color: var(--my-deep-gray);
  width: 135px;
}

.about-button {
  width: auto;
  padding: 0 20px;
}

.cnc-btn {

}

.first-image {
  background: linear-gradient(179.92deg, #FFA97A 0.07%, rgba(248, 242, 244, 0.5) 134.98%);
  border-radius: 70px 70px 20px 20px;
}

.second-image {
  background: linear-gradient(179.92deg, #FFA97A 0.07%, rgba(248, 242, 244, 0.5) 134.98%);
  border-radius: 30px;
}

.title {
  color: var(--my-orange);
  font-size: 3.2rem;
  font-weight: 700;
  text-shadow: 0 7px 34px rgba(255,169,122,0.6);
  line-height: 3rem;
}

.title-info {
  font-size: 1.5rem;
  font-weight: 800;
  color: #767676;
  line-height: 2.5rem;
}

.info-about-user {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.2px;
  text-align: left;
  color: #5CA17C;
  background: -webkit-linear-gradient(135deg, #FF9F65, #DED37E, #26BDA6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: .4em;
  margin-bottom: 0;
  border-bottom: 1px solid #5CA17C;
}

.card {
  background-color: var(--my-dark);
  border: none;
  border-radius: 15px;
}

.card-content > svg {
  margin-top: 12px;
}

.card-text-1 {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: var(--my-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text-2 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: #959595;
}

.groups-card {
  gap: 90px;
}

.experience-text {
  text-align: center;
  color: #b4afaf;
  text-shadow: 0 7px 34px orange;
  font-size: 1.7rem;
  min-width: 350px;
  max-width: 500px;
}

.experience-card {
  width: 300px;
}

.project-card {
  width: 350px;
}

.experience-card, .project-card {
  border-radius: 20px;
  background-color: var(--my-dark);
  padding: 22px 0 22px 31px;
}

.experience-card-title {
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: var(--my-text-color);
}

.experience-card-description {
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #767676;
}

.experience-title {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: var(--my-text-color);
  margin-top: 10px;
  margin-bottom: -18px;
}

.offer-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: var(--my-text-color);
}

.checked-svg {
  margin-bottom: 10px;
}

.offer-description {
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #8B8B8B;
  width: 210px;
}

.project-img {
  border-radius: 10px;
  margin-top: 17px;
}

.contact-button {
  box-shadow: 0 0 17px 0 #FFA97A;
}

.contact-button, .view-button {
  border: 1px solid var(--my-orange);
  border-radius: 5px;
  height: 35px;
  color: var(--my-text-color);
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 28px;
  background: none;
}

.contact-bar {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: var(--my-dark);
  text-align: center;
  display: flex;
}

.contact-bar > svg {
  margin: auto;
}

.motto {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-align: left;
  color: #5CA17C;
  background: -webkit-linear-gradient( #26BDA6, #FF9F65, #DED37E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 1px solid #5CA17C;
  padding-bottom: .5rem;
}

.tg:hover, .inst:hover, .mail:hover {
  margin-top: -4px;
  transition: all 0.4s !important;
}

@media only screen and (max-width: 767px) {
  .groups-card {
    gap: 30px;
  }
}
@media only screen and (max-width: 630px) {
  .groups-card {
    gap: 0;
    margin: 5px;
  }
}
</style>
