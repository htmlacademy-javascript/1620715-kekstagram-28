const NAMES = [
  'Александр Волкановски',
  'Ислам Махачев',
  'Камару Усман',
  'Исраэль Адесанья',
  'Фрэнсис Нганну',
  'Чарльз Оливейра',
  'Леон Эдвардс',
  'Алекс Перейра'
];

const DESCRIPTIONS = [
  'О-О, моя Оборона!',
  'Солнечный зайчик стеклянного глаза',
  'Траурный мячик нелепого мира',
  'Траурный мячик дешёвого мира',
  'Пластмассовый мир победил',
  'Ликует картонный набат',
  'Кому нужен ломтик июльского неба?',
  'Солнечный зайчик незрячего мира',
  'Траурный мячик стеклянного глаза',
  'Траурный зайчик нелепого глаза',
  'Макет оказался сильней',
  'Последний кораблик остыл',
  'Последний фонарик устал',
  'А в горле сопят комья воспоминаний',
  'Траурный мячик незрячего мира',
  'Солнечный зайчик стеклянного глаза'
];

const POSTS_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let postId = 1;
let commentId = 1;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createMessage = (messages) => {
  const message = Array.from({length: getRandomNumber(1, 2)}, () =>
    messages[getRandomNumber(0, messages.length - 1)]);
  return [...new Set(message)].join(' ');
};

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: createMessage(MESSAGES),
    name: NAMES[getRandomNumber(0, NAMES.length - 1)]
  };

  commentId++;

  return comment;
};

const createPost = () => {
  const post = {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 6)}, createComment)
  };

  postId++;

  return post;
};

const posts = () => Array.from({length: POSTS_COUNT}, createPost);
