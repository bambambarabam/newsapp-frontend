import React from 'react';
import './About.css';

function About(props) {
  return (
    <section className='about'>
      <img
        className='about__image'
        src='https://hhcdn.ru/photo/482767244.jpeg?t=1612717397&h=KaV4bhdE6HZjhRztZIn06A'
        alt='Аватар автора.'
      />
      <div className='about__container'>
        <h2 className='about__header'>
          Об авторе
        </h2>
        <p className='about__text'>
          Привет! Это проект Newsapp - здесь вы можете поискать интересные статьи и новости, а также сохранить их себе в профиль.
        </p>
        <p className='about__text'>
          Меня зовут Вячеслав Лебединцев, я начинающий веб-разработчик, в конце 2020 года закончил курс Яндекса по разработке.
          У меня есть опыт верстки адаптивных лендингов, создания Single Page App на React с подключением REST API, работы с git, npm, webpack, eslint.
          Также есть навык работы с  NodeJS (express, mongo, mongoose). &nbsp;
          </p>
        <p className='about__text'>
          Мои проекты и код можно посмотреть на гитхабе по ссылке в правом нижнем углу старницы ↘️
          </p>
        <p className='about__text'>
          <span>Мои контакты:</span>
          <br />
          +7 937 790-87-15 (telegram, whatsapp)&nbsp;
          <br />
          <a href=' s.lebedintsev@yahoo.com'>s.lebedintsev@yahoo.com</a>
        </p>
      </div>
    </section>
  )
}

export default About;