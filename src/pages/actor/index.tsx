import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Card } from '../../components';
import { ActorDetails } from '../../components/actor-details';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getActors, getActorsMovies } from '../../store/thunks/actors';

import { imageUrl } from '../../utils/constants';

import s from './actor.module.scss';

interface ActorPageProps {}

export const ActorPage: FC<ActorPageProps> = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { actorsData, actorsMoviesData } = useAppSelector((state) => state.actor);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getActors(id));
    dispatch(getActorsMovies(id));
  }, [dispatch, id]);

  const {
    biography,
    birthday,
    name,
    place_of_birth,
    profile_path,
    also_known_as,
    known_for_department,
  } = actorsData;

  const filteredActorMovies = actorsMoviesData?.cast?.filter((el) => el.backdrop_path !== null);

  return (
    <section className={s.actor}>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={biography} />
      </Helmet>
      <div className={s.actorContainer}>
        <div className={s.actorTop}>
          <img src={`${imageUrl}/${profile_path}`} alt={name} />
          <ActorDetails
            name={name}
            birthday={birthday}
            birthdayPlace={place_of_birth}
            alsoKnow={also_known_as}
            knownAs={known_for_department}
          />
        </div>

        <h3 className={s.actorTitle}>Biography</h3>
        <p className={s.actorText}>{biography}</p>

        <h3 className={s.actorTitle}>Filmography</h3>
        <div className={s.actorMovies}>
          {filteredActorMovies?.slice(0, 10).map((el) => (
            <Card
              id={el.id}
              poster={`${imageUrl}/${el.backdrop_path}`}
              title={el.title}
              rating={el.vote_average}
              type="movie"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
