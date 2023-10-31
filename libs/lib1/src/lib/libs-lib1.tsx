import styles from './libs-lib1.module.scss';

/* eslint-disable-next-line */
export interface LibsLib1Props {}

export function LibsLib1(props: LibsLib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsLib1!</h1>
    </div>
  );
}

export default LibsLib1;
