import { FC, Fragment } from 'react';

import s from './actor-details.module.scss';

interface ActorDetailsProps {
  name: string;
  birthday: string;
  birthdayPlace: string;
  alsoKnow: string[];
  knownAs: string;
}

export const ActorDetails: FC<ActorDetailsProps> = ({
  name,
  birthday,
  birthdayPlace,
  alsoKnow,
  knownAs,
}) => {
  return (
    <div>
      <h2 className={s.title}>{name}</h2>
      <ul>
        <li className={s.li}>
          Birthday: <span className={s.span}>{birthday}</span>
        </li>
        <li className={s.li}>
          Place of birth: <span className={s.span}>{birthdayPlace}</span>
        </li>
        <li className={s.li}>
          Frame for: <span className={s.span}>{knownAs}</span>
        </li>
        {alsoKnow.length > 1 && (
          <li className={s.li}>
            Also know as:
            {alsoKnow?.map((el: string, index: number) => (
              <Fragment key={index}>
                {index > 0 && ', '}
                <span className={s.span}>{el}</span>
              </Fragment>
            ))}
          </li>
        )}
      </ul>
    </div>
  );
};
