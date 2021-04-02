import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MUIButton from './MUIButton';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function ProjectShowcase({ title, desc, stack, hasDemo, gitUrl }) {
  return (
    <div className={styles.fullwidth}>
      <div className={styles.grid}>
      <div className={styles['hero-img']}>
        <Image
          src={`/images/${title.toLowerCase()}-showcase-1.gif`}
          alt="Project One"
          layout="fill"
          objectFit="cover"
        />
      </div>
        <div className={styles['hero-typo']}>
          <Image
            src={`/icons/${stack}-logo.svg`}
            alt={stack}
            width={30}
            height={30}
          />
          <h3 className={styles['stack-title']}>{stack}</h3>
          <h1>{title}</h1>
          <p className={styles.description}>
            <div dangerouslySetInnerHTML={{ __html: desc }}></div>
          </p>
          <MUIButton
            variant="outlined"
            startIcon={<GitHubIcon />}
            color="default"
            href={`https://github.com/prncn/${gitUrl}`}
          >
            Repo
          </MUIButton>
          {hasDemo && (
            <MUIButton variant="outlined" color="default">
              Demo
            </MUIButton>
          )}
        </div>
      </div>
    </div>
  );
}
