import React from 'react';
import PageHeader from './partials/PageHeader';

export default function SubscribePage() {
  const title = 'Подписаться';

  const externalWebPlatforms = {
    audio: {
      applePodcasts: {
        link: 'https://podcasts.apple.com/ru/podcast/%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B4-18/id1458311254?mt=2',
        title: 'Apple Podcasts',
      },
      soundCloud: {
        link: 'https://soundcloud.com/znprod',
        title: 'SoundCloud',
      },
    },
    socials: {
      youtube: {
        link: 'https://www.youtube.com/channel/UC6cTShKx3lJWw-EzSr_ZAfw',
        title: 'Youtube',
      },
      tgChat: {
        link: 'https://t.me/ZnProd',
        title: 'Telegram-чат',
      },
      tgChanel: {
        link: 'https://t.me/ZnProdChannel',
        title: 'Telegram-канал',
      },
      twitter: {
        link: 'https://twitter.com/podcast_znprod',
        title: 'Twitter',
      },
      instagram: {
        link: 'https://www.instagram.com/zn.prod',
        title: 'Instagram',
      }
    }
  }

  const {youtube} = externalWebPlatforms.socials;
  
  const getExternalLink = ({link, title}) => <a href={link} target="_blank">{title}</a>;
  const getAudioLink = (webPlatform) => getExternalLink(externalWebPlatforms.audio[webPlatform]);
  const getSocialLink = (webPlatform) => getExternalLink(externalWebPlatforms.socials[webPlatform]);

  return (
    <div className="content">
      <PageHeader title={title} />

      <p>
        Посмотреть и подписаться на {youtube.title} можно <a href={youtube.link}>Здесь</a>
      </p>
      <p>
        Аудиоверсию можно найти в любой программе для прослушивания подкастов,
        например {getAudioLink('applePodcasts')} или {getAudioLink('soundCloud')}
      </p>
      Также у нас есть {getSocialLink('tgChat')}, {getSocialLink('tgChanel')}, {getSocialLink('twitter')} и даже {getSocialLink('instagram')}
    </div>
  );
}
