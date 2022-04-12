const avatarChooser = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview').children[0];
const roomPhotoChooser = document.querySelector('#images');
const previewRoomPhoto = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const getPhotoPreview = (photo, preview) => {
  photo.addEventListener('change', () => {
    const file = photo.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

    if (matches) {
      if (preview === previewRoomPhoto) {
        preview.style.background = `center / contain no-repeat url(${URL.createObjectURL(file)}) #e4e4de`;
      } else {
        preview.src = URL.createObjectURL(file);
      }
    }
  });
};

getPhotoPreview (avatarChooser, previewAvatar);
getPhotoPreview (roomPhotoChooser, previewRoomPhoto);
