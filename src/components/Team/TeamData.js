// Add organisors name within first 6
const TeamData = [
  {
    id: 1,
    Name: 'Aniket Pal',
    Role: 'Lead Organizer',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1628939607/webwiz-portfolio/team-images/team-webwiz/aniket%20pal.jpg',
    linkedIn: 'https://www.linkedin.com/in/aniket-pal/',
  },
  {
    id: 2,
    Name: 'Sumana Basu',
    Role: 'Co-Lead Organizer',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693346/Hackodisha-Team/person_-_Sumana_Basu_xtt6xk.jpg',
    linkedIn: 'https://www.linkedin.com/in/sumana-basu/',
  },
  {
    id: 3,
    Name: 'Kumar Shantanu',
    Role: 'Management Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693318/Hackodisha-Team/kumar_shantanu_-_kumar_shantanu_fb9ilf.jpg',
    linkedIn: 'https://www.linkedin.com/in/kumar-shantanu01/',
  },
  {
    id: 4,
    Name: 'Sai Sambhab Chaini',
    Role: 'Outreach Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693324/Hackodisha-Team/IMG-20200329-WA0008_-_saisambhav_chaini_xxofde.jpg',
    linkedIn: 'https://www.linkedin.com/in/sai-sambhab-chaini-1a5877210',
  },
  {
    id: 5,
    Name: 'Shreya Khetan',
    Role: 'Outreach Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693427/Hackodisha-Team/WhatsApp_Image_2021-09-14_at_10.29.30_PM_-_saisambhav_chaini_g5jlao.jpg',
    linkedIn: 'https://www.linkedin.com/in/shreya-khetan-9b6255a8',
  },
  {
    id: 6,
    Name: 'Manjeet Dhayal',
    Role: 'Sponsorship Lead',
    imgPath:
      'https://res.cloudinary.com/manjeetdhayal/image/upload/v1631601856/Manjeet/IMG_20210911_112249_x9edqx.jpg',
    linkedIn: 'https://www.linkedin.com/in/manjeet-dhayal/',
  },
  {
    id: 7,
    Name: 'Amreet Kumar Khuntia',
    Role: 'Tech Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693191/Hackodisha-Team/Amreet_kumar_khuntia_2_-_Amreet_Ent_mmwaqn.png',
    linkedIn: 'https://www.linkedin.com/in/amreet-khuntia-15193220b/',
  },
  {
    id: 8,
    Name: 'Rituraj Tripathy',
    Role: 'Design Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631692861/Hackodisha-Team/PicsArt_09-14-10.09.41_-_Rituraj_Tripathy_vzjvwt.jpg',
    linkedIn: 'https://www.linkedin.com/in/rituraj-tripathy-a666aa20b',
  },

  {
    id: 9,
    Name: 'Rohan Kumar Sethi',
    Role: 'Public Relations Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693384/Hackodisha-Team/Rohan_Kumar_-_Rohan_Kumar_gwcfvk.jpg',
    linkedIn: 'https://www.linkedin.com/in/rohan-kumar-8068a41b8',
  },
  {
    id: 10,
    Name: 'Sanjeet Patro',
    Role: 'Public Relations Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693236/Hackodisha-Team/IMG_20210716_123431_-_Sanjeet_Patro_a1c1qi.jpg',
    linkedIn: 'https://www.linkedin.com/in/sanjeet-patro-6a1067202/',
  },
  {
    id: 11,
    Name: 'Satyajit Panda',
    Role: 'Content Lead',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693385/Hackodisha-Team/SAVE_20210320_140941_-_Satyajit_Panda_b0xmsa.jpg',
    linkedIn: 'https://www.linkedin.com/in/satyajit-panda-b824381a9',
  },
  {
    id: 12,
    Name: 'Unagallage Nirmal Chathura Unagalle',
    linkedIn: 'https://www.linkedin.com/in/nirmal-chathura/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693344/Hackodisha-Team/Nirmal_Chathura_-_Nirmal_C_sffbdo.jpg',
    Role: 'Tech Team',
  },
  {
    id: 13,
    Name: 'Chirra Anshu Teja',
    linkedIn: 'https://www.linkedin.com/in/anshu-teja-chirra-72a687215',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693351/Hackodisha-Team/photo_-_Anshu_Teja_Chirra_cpyalv.jpg',
    Role: 'Publicity Team',
  },
  {
    id: 14,
    Name: 'Midatana Sai Praneetha',
    linkedIn: 'https://www.linkedin.com/in/midatana-sai-praneetha-9a587420b/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693380/Hackodisha-Team/Profile_-_Sai_Praneetha_p4vdto.jpg',
    Role: 'Publicity Team',
  },
  {
    id: 15,
    Name: 'Sayambika Das',
    linkedIn: 'https://www.linkedin.com/in/sayambika-das-398666203',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693409/Hackodisha-Team/Screenshot_2021-09-14-20-19-57-73_99c04817c0de5652397fc8b56c3b3817_-_Sayambika_Das_uieje2.jpg',
    Role: 'Publicity Team',
  },
  {
    id: 16,
    Name: 'Gourab Nanda',
    linkedIn: 'https://www.linkedin.com/in/gourab-nanda-0b27aa173/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693200/Hackodisha-Team/gourab_nanda_2021_-_Gourab_Nanda_ncmbvu.jpg',
    Role: 'Publicity Team',
  },
  {
    id: 17,
    Name: 'Insha Mustafa ',
    linkedIn: 'https://www.linkedin.com/in/insha-mustafa-5b4965200/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631692347/Hackodisha-Team/Insha_Mustafa.jpg',
    Role: 'Publicity Team',
  },
  {
    id: 18,
    Name: 'Abhishek Ranjan Prusty',
    linkedIn: 'https://www.linkedin.com/in/abhishek-ranjan-2002/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693179/Hackodisha-Team/20210103_162858_-_abhishek_ranjan_prusty_cvhuyh.jpg',
    Role: 'Publicity Team',
  },

  {
    id: 19,
    Name: 'Krishna Agrawal',
    linkedIn: 'https://www.linkedin.com/in/krishna-agrawal-6370b3218',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693235/Hackodisha-Team/IMG_20201229_112653-min_-_Krishna_Agrawal_kdjikg.jpg',
    Role: 'Sponsorship Team',
  },
  {
    id: 20,
    Name: 'Aporanta Mukhopadhyay',
    linkedIn: 'https://www.linkedin.com/in/aporanta-mukhopadhyay-744892210',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693231/Hackodisha-Team/IMG_20201020_225126_1_-_Aporanta_Mukhopadhyay_pwpmyj.jpg',
    Role: 'Sponsorship Team',
  },

  {
    id: 21,
    Name: 'Swagat Raj',
    linkedIn: 'https://www.linkedin.com/mwlite/in/swagat-raj-8924691b7',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693274/Hackodisha-Team/IMG_20210724_215032_008_2_-_Swagat_Raj_zgjxdp.jpg',
    Role: 'Design Team',
  },
  {
    id: 22,
    Name: 'Sai Ashish',
    linkedIn: 'https://www.linkedin.com/in/sai-ashish-anshuman-5b4007194/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693431/Hackodisha-Team/WhatsApp_Image_2021-09-15_at_11.57.09_AM_-_Sai_Ashish_jjgwne.jpg',
    Role: 'Design Team ',
  },
  {
    id: 23,
    Name: 'Ankush Kumar Lohani',
    linkedIn: 'https://www.linkedin.com/in/iamakl',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693411/Hackodisha-Team/WhatsApp_Image_2021-07-26_at_1.44.28_AM_-_Ankush_Lohani_khkylq.jpg',
    Role: 'Outreach Team',
  },
  {
    id: 24,
    Name: 'Lakshmi Haritha',
    linkedIn: 'https://www.linkedin.com/in/lakshmi-haritha-annadanam-4b8632201',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693314/Hackodisha-Team/IMG-20210914-WA0070__01_-_Haritha_Haritha_wrusr8.jpg',
    Role: 'Outreach Team',
  },
  {
    id: 25,
    Name: 'Awantika Mallick',
    linkedIn: 'https://www.linkedin.com/in/awantika-mallick-33ab40207/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693193/Hackodisha-Team/Awantika_Mallick_-_awantika_mallick_cgqwoe.jpg',
    Role: 'Outreach Team',
  },
  {
    id: 26,
    Name: 'Komal Deegwal',
    linkedIn: 'https://www.linkedin.com/in/komal-deegwal-35b31a206',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693429/Hackodisha-Team/WhatsApp_Image_2021-09-15_at_11.16.16_-_Sumana_Basu_x5g5rs.jpg',
    Role: 'Outreach Team',
  },
  {
    id: 27,
    Name: 'Sayantan Chatterjee',
    linkedIn: 'https://www.linkedin.com/in/sayantan-chatterjee-400784208/',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693398/Hackodisha-Team/Screenshot_2021-04-18_at_9.19.03_PM_-_Sayantan_Ch_ba5zdi.png',
    Role: 'Outreach Team',
  },
  {
    id: 28,
    Name: 'Pratika Mishra',
    linkedIn: 'https://www.linkedin.com/in/pratika-mishra-400b39198',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631697209/Hackodisha-Team/IMG_20210801_141239_-_PRATIKA_MISHRA_1_wxwn6o.jpg',
    Role: 'Outreach Team',
  },
  {
    id: 29,
    Name: 'Priti Kumari',
    linkedIn: 'https://www.linkedin.com/in/priti-kumari-1b47a1203',
    imgPath:
      'https://res.cloudinary.com/webwiznitr/image/upload/v1631693312/Hackodisha-Team/IMG-20210826-WA0232_-_Priti_Kumari_cpnzkz.jpg',
    Role: 'Outreach Team',
  },
];

export default TeamData;
