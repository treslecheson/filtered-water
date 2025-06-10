import LiquidChrome from '../blocks/Backgrounds/LiquidChrome/LiquidChrome'
const CleanWater: React.FC = () => {
	return (
		<>
			<div className='background'>
				<div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
					<LiquidChrome
						baseColor={[0.1, 0.1, 0.48]}
						speed={0.3}
						amplitude={0.6}
						interactive={true}
					/>
				</div>
			</div>

			<div className='mission'>
				<div className='end-card'>
					<h1>Water Successfully Cleaned</h1>
				</div>
			</div>
		</>
	)
}
export default CleanWater;
