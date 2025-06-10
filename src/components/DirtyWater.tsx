import LiquidChrome from '../blocks/Backgrounds/LiquidChrome/LiquidChrome'
const DirtyWater: React.FC = () => {
	return (
		<>
			<div className='background'>
				<div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
					<LiquidChrome
						baseColor={[0.44, 0.4, 0.29]}
						speed={0.3}
						amplitude={0.6}
						interactive={true}
					/>
				</div>
			</div>
		</>
	)

}

export default DirtyWater;
