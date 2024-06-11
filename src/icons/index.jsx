export function SpinnerIcon({ className = null }) {
  return (
    <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#000000"
      />
      <path
        d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        fill="#000000"
      />
    </svg>
  );
}

export function LogoImage({ className = null }) {
  return (
    <svg width="90" height="64" viewBox="0 0 90 64" fill="none" className={className}>
      <path
        d="M63 15.3C62.3923 15.0264 61.7177 14.9374 61.0598 15.0441C60.402 15.1507 59.7901 15.4484 59.3 15.9L55 19.9V17C55 15.4087 54.3679 13.8826 53.2426 12.7574C52.1174 11.6321 50.5913 11 49 11H31C29.4087 11 27.8826 11.6321 26.7574 12.7574C25.6321 13.8826 25 15.4087 25 17V33C25 34.5913 25.6321 36.1174 26.7574 37.2426C27.8826 38.3679 29.4087 39 31 39H49C50.5913 39 52.1174 38.3679 53.2426 37.2426C54.3679 36.1174 55 34.5913 55 33V30.1L59.32 34.1C59.956 34.6757 60.7822 34.9962 61.64 35C62.1161 34.9989 62.5864 34.8966 63.02 34.7C63.6099 34.4614 64.1152 34.0523 64.4715 33.5251C64.8277 32.9978 65.0187 32.3763 65.02 31.74V18.26C65.0171 17.6214 64.8232 16.9982 64.4632 16.4707C64.1032 15.9432 63.5936 15.5355 63 15.3Z"
        fill="white"
      />
      <path
        d="M15.1307 50.6364H12.3267C12.3068 50.4044 12.2538 50.1939 12.1676 50.005C12.0848 49.8161 11.9688 49.6536 11.8196 49.5178C11.6738 49.3786 11.4964 49.2725 11.2876 49.1996C11.0788 49.1233 10.8419 49.0852 10.5767 49.0852C10.1127 49.0852 9.71993 49.1979 9.39844 49.4233C9.08026 49.6487 8.8383 49.9718 8.67259 50.3928C8.51018 50.8137 8.42898 51.3191 8.42898 51.9091C8.42898 52.5322 8.51184 53.0542 8.67756 53.4751C8.84659 53.8928 9.0902 54.2076 9.40838 54.4197C9.72656 54.6286 10.1094 54.733 10.5568 54.733C10.812 54.733 11.0407 54.7015 11.2429 54.6385C11.4451 54.5722 11.6207 54.4777 11.7699 54.3551C11.919 54.2325 12.04 54.085 12.1328 53.9126C12.2289 53.737 12.2936 53.5398 12.3267 53.321L15.1307 53.3409C15.0975 53.7718 14.9766 54.2109 14.7678 54.6584C14.5589 55.1025 14.2623 55.5135 13.8778 55.8913C13.4967 56.2659 13.0244 56.5675 12.4609 56.7962C11.8975 57.0249 11.2429 57.1392 10.4972 57.1392C9.5625 57.1392 8.72396 56.9387 7.98153 56.5376C7.24242 56.1366 6.65743 55.5466 6.22656 54.7678C5.79901 53.9889 5.58523 53.036 5.58523 51.9091C5.58523 50.7756 5.80398 49.821 6.24148 49.0455C6.67898 48.2666 7.26894 47.6783 8.01136 47.2805C8.75379 46.8795 9.58239 46.679 10.4972 46.679C11.1402 46.679 11.7318 46.7668 12.272 46.9425C12.8123 47.1181 13.2862 47.375 13.6939 47.7131C14.1016 48.0478 14.4297 48.4605 14.6783 48.951C14.9268 49.4415 15.0777 50.0033 15.1307 50.6364ZM25.8904 50.6364H23.0865C23.0666 50.4044 23.0136 50.1939 22.9274 50.005C22.8445 49.8161 22.7285 49.6536 22.5794 49.5178C22.4335 49.3786 22.2562 49.2725 22.0474 49.1996C21.8386 49.1233 21.6016 49.0852 21.3365 49.0852C20.8725 49.0852 20.4797 49.1979 20.1582 49.4233C19.84 49.6487 19.5981 49.9718 19.4324 50.3928C19.2699 50.8137 19.1887 51.3191 19.1887 51.9091C19.1887 52.5322 19.2716 53.0542 19.4373 53.4751C19.6064 53.8928 19.85 54.2076 20.1681 54.4197C20.4863 54.6286 20.8691 54.733 21.3166 54.733C21.5718 54.733 21.8005 54.7015 22.0027 54.6385C22.2048 54.5722 22.3805 54.4777 22.5297 54.3551C22.6788 54.2325 22.7998 54.085 22.8926 53.9126C22.9887 53.737 23.0533 53.5398 23.0865 53.321L25.8904 53.3409C25.8573 53.7718 25.7363 54.2109 25.5275 54.6584C25.3187 55.1025 25.0221 55.5135 24.6376 55.8913C24.2565 56.2659 23.7842 56.5675 23.2207 56.7962C22.6573 57.0249 22.0027 57.1392 21.2569 57.1392C20.3223 57.1392 19.4837 56.9387 18.7413 56.5376C18.0022 56.1366 17.4172 55.5466 16.9863 54.7678C16.5588 53.9889 16.345 53.036 16.345 51.9091C16.345 50.7756 16.5637 49.821 17.0012 49.0455C17.4387 48.2666 18.0287 47.6783 18.7711 47.2805C19.5136 46.8795 20.3422 46.679 21.2569 46.679C21.8999 46.679 22.4915 46.7668 23.0318 46.9425C23.572 47.1181 24.046 47.375 24.4537 47.7131C24.8613 48.0478 25.1895 48.4605 25.438 48.951C25.6866 49.4415 25.8374 50.0033 25.8904 50.6364ZM32.1758 46.3409L28.8945 58.5312H26.5678L29.8491 46.3409H32.1758ZM32.6357 49.0455V46.8182H41.4851V49.0455H38.4226V57H35.6982V49.0455H32.6357ZM45.2896 46.8182V57H42.5254V46.8182H45.2896ZM56.1053 50.6364H53.3013C53.2814 50.4044 53.2284 50.1939 53.1422 50.005C53.0594 49.8161 52.9434 49.6536 52.7942 49.5178C52.6484 49.3786 52.4711 49.2725 52.2623 49.1996C52.0534 49.1233 51.8165 49.0852 51.5513 49.0852C51.0873 49.0852 50.6945 49.1979 50.373 49.4233C50.0549 49.6487 49.8129 49.9718 49.6472 50.3928C49.4848 50.8137 49.4036 51.3191 49.4036 51.9091C49.4036 52.5322 49.4864 53.0542 49.6522 53.4751C49.8212 53.8928 50.0648 54.2076 50.383 54.4197C50.7012 54.6286 51.084 54.733 51.5314 54.733C51.7866 54.733 52.0153 54.7015 52.2175 54.6385C52.4197 54.5722 52.5953 54.4777 52.7445 54.3551C52.8936 54.2325 53.0146 54.085 53.1074 53.9126C53.2035 53.737 53.2682 53.5398 53.3013 53.321L56.1053 53.3409C56.0721 53.7718 55.9512 54.2109 55.7424 54.6584C55.5336 55.1025 55.2369 55.5135 54.8525 55.8913C54.4713 56.2659 53.999 56.5675 53.4355 56.7962C52.8721 57.0249 52.2175 57.1392 51.4718 57.1392C50.5371 57.1392 49.6986 56.9387 48.9561 56.5376C48.217 56.1366 47.632 55.5466 47.2012 54.7678C46.7736 53.9889 46.5598 53.036 46.5598 51.9091C46.5598 50.7756 46.7786 49.821 47.2161 49.0455C47.6536 48.2666 48.2435 47.6783 48.986 47.2805C49.7284 46.8795 50.557 46.679 51.4718 46.679C52.1148 46.679 52.7064 46.7668 53.2466 46.9425C53.7869 47.1181 54.2608 47.375 54.6685 47.7131C55.0762 48.0478 55.4043 48.4605 55.6529 48.951C55.9015 49.4415 56.0523 50.0033 56.1053 50.6364ZM57.3594 57V46.8182H60.1236V50.9347H60.2628L63.3253 46.8182H66.5469L63.1065 51.3523L66.6264 57H63.3253L61.0384 53.1818L60.1236 54.375V57H57.3594ZM67.3672 57V46.8182H74.7053V49.0455H70.1314V50.7955H74.3274V53.0227H70.1314V54.7727H74.6854V57H67.3672ZM75.7978 49.0455V46.8182H84.6472V49.0455H81.5847V57H78.8603V49.0455H75.7978Z"
        fill="white"
      />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg width="48px" height="48px" viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M10.0874 8.34361L15 13.256L19.8871 8.36906C19.9951 8.25417 20.1251 8.16225 20.2695 8.09884C20.4138 8.03542 20.5695 8.0018 20.7271 8C21.0646 8 21.3884 8.13408 21.627 8.37275C21.8657 8.61141 21.9998 8.93511 21.9998 9.27264C22.0028 9.42866 21.9738 9.58365 21.9147 9.72809C21.8556 9.87253 21.7676 10.0034 21.6562 10.1126L16.7054 14.9995L21.6562 19.9501C21.8659 20.1553 21.9889 20.4331 21.9998 20.7264C21.9998 21.0639 21.8657 21.3876 21.627 21.6262C21.3884 21.8649 21.0646 21.999 20.7271 21.999C20.5649 22.0057 20.4031 21.9787 20.2519 21.9195C20.1007 21.8603 19.9635 21.7704 19.8489 21.6554L15 16.743L10.1001 21.6427C9.99261 21.7537 9.86414 21.8424 9.72216 21.9036C9.58017 21.9647 9.42748 21.9972 9.2729 21.999C8.93536 21.999 8.61164 21.8649 8.37297 21.6262C8.13429 21.3876 8.00021 21.0639 8.00021 20.7264C7.99724 20.5703 8.02619 20.4153 8.08528 20.2709C8.14437 20.1265 8.23235 19.9956 8.34383 19.8864L13.2946 14.9995L8.34383 10.0489C8.13407 9.84374 8.01108 9.56587 8.00021 9.27264C8.00021 8.93511 8.13429 8.61141 8.37297 8.37275C8.61164 8.13408 8.93536 8 9.2729 8C9.57834 8.00382 9.87106 8.12726 10.0874 8.34361Z"
        fill="#DBD9DD"
      />
    </svg>
  );
}

export function TimeIcon({ className }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M7.83301 13.033C10.693 13.033 13.033 10.693 13.033 7.83301C13.033 4.97301 10.693 2.63301 7.83301 2.63301C4.97301 2.63301 2.63301 4.97301 2.63301 7.83301C2.63301 10.693 4.97301 13.033 7.83301 13.033ZM7.83301 1.33301C11.408 1.33301 14.333 4.25801 14.333 7.83301C14.333 11.408 11.408 14.333 7.83301 14.333C4.25801 14.333 1.33301 11.408 1.33301 7.83301C1.33301 4.25801 4.25801 1.33301 7.83301 1.33301ZM8.15801 8.35301L5.03801 10.173L4.58301 9.26301L7.18301 7.76801V4.58301H8.15801V8.35301Z"
        fill="#DBD9DD"
      />
    </svg>
  );
}

export function DateNonSelectIcon() {
  return (
    <svg width="90" height="107" viewBox="0 0 90 107" fill="none">
      <mask id="path-1-inside-1_4362_4013" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C4.47715 0 0 4.47715 0 10V76C3.31371 76 6 78.6863 6 82C6 85.3137 3.31371 88 0 88V97C0 102.523 4.47715 107 10 107H80C85.5229 107 90 102.523 90 97V88C86.6863 88 84 85.3137 84 82C84 78.6863 86.6863 76 90 76V10C90 4.47715 85.5229 0 80 0H10ZM45 18C47.2091 18 49 16.2091 49 14C49 11.7909 47.2091 10 45 10C42.7909 10 41 11.7909 41 14C41 16.2091 42.7909 18 45 18Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.47715 0 0 4.47715 0 10V76C3.31371 76 6 78.6863 6 82C6 85.3137 3.31371 88 0 88V97C0 102.523 4.47715 107 10 107H80C85.5229 107 90 102.523 90 97V88C86.6863 88 84 85.3137 84 82C84 78.6863 86.6863 76 90 76V10C90 4.47715 85.5229 0 80 0H10ZM45 18C47.2091 18 49 16.2091 49 14C49 11.7909 47.2091 10 45 10C42.7909 10 41 11.7909 41 14C41 16.2091 42.7909 18 45 18Z"
        fill="url(#paint0_linear_4362_4013)"
      />
      <path
        d="M0 76H-1V77H0V76ZM0 88V87H-1V88H0ZM90 88H91V87H90V88ZM90 76V77H91V76H90ZM1 10C1 5.02944 5.02944 1 10 1V-1C3.92487 -1 -1 3.92487 -1 10H1ZM1 76V10H-1V76H1ZM7 82C7 78.134 3.86599 75 0 75V77C2.76142 77 5 79.2386 5 82H7ZM0 89C3.86599 89 7 85.866 7 82H5C5 84.7614 2.76142 87 0 87V89ZM1 97V88H-1V97H1ZM10 106C5.02944 106 1 101.971 1 97H-1C-1 103.075 3.92487 108 10 108V106ZM80 106H10V108H80V106ZM89 97C89 101.971 84.9706 106 80 106V108C86.0751 108 91 103.075 91 97H89ZM89 88V97H91V88H89ZM90 87C87.2386 87 85 84.7614 85 82H83C83 85.866 86.134 89 90 89V87ZM85 82C85 79.2386 87.2386 77 90 77V75C86.134 75 83 78.134 83 82H85ZM89 10V76H91V10H89ZM80 1C84.9706 1 89 5.02944 89 10H91C91 3.92487 86.0751 -1 80 -1V1ZM10 1H80V-1H10V1ZM48 14C48 15.6569 46.6569 17 45 17V19C47.7614 19 50 16.7614 50 14H48ZM45 11C46.6569 11 48 12.3431 48 14H50C50 11.2386 47.7614 9 45 9V11ZM42 14C42 12.3431 43.3431 11 45 11V9C42.2386 9 40 11.2386 40 14H42ZM45 17C43.3431 17 42 15.6569 42 14H40C40 16.7614 42.2386 19 45 19V17Z"
        fill="url(#paint1_linear_4362_4013)"
        mask="url(#path-1-inside-1_4362_4013)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4362_4013"
          x1="45"
          y1="0"
          x2="45"
          y2="107"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0D0E11" />
          <stop offset="1" stopColor="#262A35" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4362_4013"
          x1="45"
          y1="-10"
          x2="45"
          y2="114.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#525252" />
          <stop offset="1" stopColor="#DBD9DD" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DateSelectionIcon() {
  return (
    <svg width="99" height="118" viewBox="0 0 99 118" fill="none">
      <mask id="path-1-inside-1_4362_4021" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C4.47715 0 0 4.47716 0 10V83.6C3.64508 83.6 6.6 86.5549 6.6 90.2C6.6 93.8451 3.64508 96.8 0 96.8V107.7C0 113.223 4.47715 117.7 10 117.7H89C94.5229 117.7 99 113.223 99 107.7V96.8C95.3549 96.8 92.4 93.8451 92.4 90.2C92.4 86.5549 95.3549 83.6 99 83.6V10C99 4.47715 94.5229 0 89 0H10ZM49.5 19.8C51.93 19.8 53.9 17.8301 53.9 15.4C53.9 12.9699 51.93 11 49.5 11C47.0699 11 45.1 12.9699 45.1 15.4C45.1 17.8301 47.0699 19.8 49.5 19.8Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.47715 0 0 4.47716 0 10V83.6C3.64508 83.6 6.6 86.5549 6.6 90.2C6.6 93.8451 3.64508 96.8 0 96.8V107.7C0 113.223 4.47715 117.7 10 117.7H89C94.5229 117.7 99 113.223 99 107.7V96.8C95.3549 96.8 92.4 93.8451 92.4 90.2C92.4 86.5549 95.3549 83.6 99 83.6V10C99 4.47715 94.5229 0 89 0H10ZM49.5 19.8C51.93 19.8 53.9 17.8301 53.9 15.4C53.9 12.9699 51.93 11 49.5 11C47.0699 11 45.1 12.9699 45.1 15.4C45.1 17.8301 47.0699 19.8 49.5 19.8Z"
        fill="url(#paint0_linear_4362_4021)"
      />
      <path
        d="M0 83.6H-1V84.6H0V83.6ZM0 96.8V95.8H-1V96.8H0ZM99 96.8H100V95.8H99V96.8ZM99 83.6V84.6H100V83.6H99ZM1 10C1 5.02944 5.02944 1 10 1V-1C3.92487 -1 -1 3.92488 -1 10H1ZM1 83.6V10H-1V83.6H1ZM7.6 90.2C7.6 86.0026 4.19736 82.6 0 82.6V84.6C3.0928 84.6 5.6 87.1072 5.6 90.2H7.6ZM0 97.8C4.19736 97.8 7.6 94.3974 7.6 90.2H5.6C5.6 93.2928 3.0928 95.8 0 95.8V97.8ZM1 107.7V96.8H-1V107.7H1ZM10 116.7C5.02944 116.7 1 112.671 1 107.7H-1C-1 113.775 3.92487 118.7 10 118.7V116.7ZM89 116.7H10V118.7H89V116.7ZM98 107.7C98 112.671 93.9706 116.7 89 116.7V118.7C95.0751 118.7 100 113.775 100 107.7H98ZM98 96.8V107.7H100V96.8H98ZM99 95.8C95.9072 95.8 93.4 93.2928 93.4 90.2H91.4C91.4 94.3974 94.8026 97.8 99 97.8V95.8ZM93.4 90.2C93.4 87.1072 95.9072 84.6 99 84.6V82.6C94.8026 82.6 91.4 86.0026 91.4 90.2H93.4ZM98 10V83.6H100V10H98ZM89 1C93.9706 1 98 5.02944 98 10H100C100 3.92487 95.0751 -1 89 -1V1ZM10 1H89V-1H10V1ZM52.9 15.4C52.9 17.2778 51.3778 18.8 49.5 18.8V20.8C52.4823 20.8 54.9 18.3823 54.9 15.4H52.9ZM49.5 12C51.3778 12 52.9 13.5222 52.9 15.4H54.9C54.9 12.4177 52.4823 10 49.5 10V12ZM46.1 15.4C46.1 13.5222 47.6222 12 49.5 12V10C46.5177 10 44.1 12.4177 44.1 15.4H46.1ZM49.5 18.8C47.6222 18.8 46.1 17.2778 46.1 15.4H44.1C44.1 18.3823 46.5177 20.8 49.5 20.8V18.8Z"
        fill="url(#paint1_linear_4362_4021)"
        mask="url(#path-1-inside-1_4362_4021)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4362_4021"
          x1="49.5"
          y1="0"
          x2="49.5"
          y2="117.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC2026" />
          <stop offset="1" stopColor="#7E1616" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4362_4021"
          x1="49.5"
          y1="-11"
          x2="49.5"
          y2="125.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#525252" />
          <stop offset="1" stopColor="#DBD9DD" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DropdownAccordionIcon({ className }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M8.94661 12.4134C9.06997 12.2898 9.21648 12.1917 9.37778 12.1248C9.53908 12.0579 9.71199 12.0234 9.88661 12.0234C10.0612 12.0234 10.2341 12.0579 10.3954 12.1248C10.5567 12.1917 10.7033 12.2898 10.8266 12.4134L15.9999 17.5867L21.1733 12.4134C21.4226 12.1641 21.7607 12.024 22.1133 12.024C22.4658 12.024 22.804 12.1641 23.0533 12.4134C23.3026 12.6627 23.4426 13.0008 23.4426 13.3534C23.4426 13.7059 23.3026 14.0441 23.0533 14.2934L16.9333 20.4134C16.8099 20.537 16.6634 20.635 16.5021 20.7019C16.3408 20.7688 16.1679 20.8033 15.9933 20.8033C15.8187 20.8033 15.6457 20.7688 15.4844 20.7019C15.3232 20.635 15.1766 20.537 15.0533 20.4134L8.93328 14.2934C8.42661 13.7867 8.42661 12.9334 8.94661 12.4134Z"
        fill="#DBD9DD"
      />
    </svg>
  );
}

export function ChairIcon({ className, fill = "#DC2026" }) {
  return (
    <svg viewBox="0 0 101 74" fill={fill} className={className}>
      <path d="M0 8.72729C0 7.62273 0.89543 6.72729 2 6.72729H18.2C19.3046 6.72729 20.2 7.62272 20.2 8.72729V51.8182C20.2 52.9228 21.0954 53.8182 22.2 53.8182H78.8C79.9046 53.8182 80.8 52.9228 80.8 51.8182V8.72729C80.8 7.62273 81.6954 6.72729 82.8 6.72729H99C100.105 6.72729 101 7.62273 101 8.72729V69C101 71.7614 98.7614 74 96 74H5C2.23857 74 0 71.7614 0 69V8.72729Z" />
      <path d="M23.5667 3C23.5667 1.34314 24.9098 0 26.5667 0H74.4333C76.0902 0 77.4333 1.34315 77.4333 3V49.4545C77.4333 50.0068 76.9856 50.4545 76.4333 50.4545H24.5666C24.0144 50.4545 23.5667 50.0068 23.5667 49.4545V3Z" />
    </svg>
  );
}

export function ScreenIcon({ className }) {
  return (
    <svg viewBox="0 0 1432 249" fill="none" className={className}>
      <path
        d="M90 107.924L716.25 91L1342.5 107.571L1401 207L716.25 184.082L31 207L90 107.924Z"
        fill="url(#paint0_linear_1242_12298)"
      />
      <path
        d="M0 18.5L718 0L1432 18.5L1342 108.5L718 92.5L90 108.5L0 18.5Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1242_12298"
          x1="716"
          y1="48.69"
          x2="716"
          y2="192.897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBFBFB" stopOpacity="0.35" />
          <stop offset="1" stopColor="#707070" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BookedIcon({ className, color = "#000000" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill={color}>
      <style type="text/css"></style>
      <g>
        <path
          fill={color}
          d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087
   c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512
   c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"
        />
        <path
          fill={color}
          d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0
   c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"
        />
      </g>
    </svg>
  );
}

export function UnavailableSeatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
        fill="#0F0F0F"
      />
    </svg>
  );
}

export function AvailableSeatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M19 7.34189C18.6095 6.95136 17.9763 6.95136 17.5858 7.34189L10.3407 14.587C9.95016 14.9775 9.31699 14.9775 8.92647 14.587L6.38507 12.0456C5.99454 11.6551 5.36138 11.6551 4.97085 12.0456C4.58033 12.4361 4.58033 13.0693 4.97085 13.4598L7.51774 16C8.68969 17.1689 10.5869 17.1677 11.7574 15.9974L19 8.7561C19.3905 8.36558 19.3905 7.73241 19 7.34189Z"
        fill="#0F0F0F"
      />
    </svg>
  );
}

export function PlusIcon({ className, color = "white" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      color={color}
    >
      <path
        d="M6.85714 9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286Z"
        fill={color}
      />
    </svg>
  );
}
