const RoamingAccent = () => {
  return (
    <div className='roaming-accent' aria-hidden='true'>
      <span className='roaming-accent__trail roaming-accent__trail--one' />
      <span className='roaming-accent__trail roaming-accent__trail--two' />
      <svg
        className='roaming-accent__svg'
        viewBox='0 0 96 96'
        role='img'
        focusable='false'
      >
        <circle className='roaming-accent__halo' cx='48' cy='48' r='25' />
        <g className='roaming-accent__react-mark'>
          <ellipse cx='48' cy='48' rx='34' ry='13' />
          <ellipse cx='48' cy='48' rx='34' ry='13' transform='rotate(60 48 48)' />
          <ellipse cx='48' cy='48' rx='34' ry='13' transform='rotate(120 48 48)' />
          <circle cx='48' cy='48' r='6' fill='#9cecff' />
        </g>
        <circle className='roaming-accent__spark' cx='20' cy='28' r='3' fill='#ffffff' />
        <circle className='roaming-accent__spark roaming-accent__spark--small' cx='74' cy='67' r='2' fill='#9cecff' />
      </svg>
    </div>
  );
};

export default RoamingAccent;
