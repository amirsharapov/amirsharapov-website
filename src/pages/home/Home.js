import { Constants } from 'src/constants';

export const HomePage = () => {
  return (
    <div style={{display: 'grid', justifyContent: 'center'}}>
      <div style={{width: 680}}>
        <h1>
          Hi, I'm Amir {Constants.EMOJIS.WAVING_HAND}
        </h1>
        <p>
          I'm a software engineer at PIMCO with an interest in automation and ML.
        </p>
        <p>
          My journey has taken me through a diverse range of projects - from coding game bots with computer vision capabilities {Constants.EMOJIS.ROBOT} {Constants.EMOJIS.BRAIN} to experimenting with new technologies in demo projects.
        </p>
        <h2>
          Projects
        </h2>
        <h2>
          Blog
        </h2>
      </div>
    </div>
  );
}
