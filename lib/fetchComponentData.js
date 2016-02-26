import _ from 'lodash';

export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    console.log('CURRENT NEEDS:', current.needs);
    return current ? (current.needs || []).concat(prev) : prev;
  }, []);

  console.log('NEEDS', needs);


  const promises = _.map(needs, need => dispatch(need(params)));

  return Promise.all(promises);
}
