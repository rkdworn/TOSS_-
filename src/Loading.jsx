

import React from 'react';
import { Asset, BottomCTA, CTAButton } from '@toss/tds-mobile';

export default function Loading({ onBack, onNext }) {
	return (
		<div
			style={{
				width: '100vw',
				height: '100dvh',
				minHeight: '100dvh',
				margin: 0,
				padding: 0,
				backgroundColor: 'var(--token-tds-color-white, var(--adaptiveBackground, #fff))',
				display: 'flex',
				flexDirection: 'column',
				boxSizing: 'border-box',
			}}
		>
			{/* Toss 공통 네비게이션 바만 노출 (직접 구현 코드 제거) */}
			{/* Main Content - Top 텍스트 + Lottie Animation */}
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<div style={{ marginTop: -66, marginBottom: 8, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<div style={{ fontSize: 22, color: '#191F28', fontWeight: 'bold', lineHeight: 1.3, marginBottom: 4 }}>
						계산중이에요
					</div>
					<div style={{ fontSize: 17, color: '#8B95A1', fontWeight: 600, lineHeight: 1.3 }}>
						잠시만 기다려주세요.
					</div>
				</div>
				<Asset.Lottie
					frameShape={{ width: 375 }}
					src="https://static.toss.im/lotties/loading/load-ripple.json"
					loop={true}
					speed={1}
					aria-hidden={true}
					style={{
						width: 375,
						height: 'fit-content',
						borderRadius: 0,
						opacity: 1,
						backdropFilter: 'blur(0px)',
						display: 'block',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: -16
					}}
				/>
			</div>

			<div style={{ marginTop: 'auto', marginBottom: 24 }}>
				<div style={{ fontSize: 17, color: '#8B95A1', fontWeight: 600, lineHeight: 1.3, textAlign: 'center', marginBottom: 12 }}>
					- 다음 화면에 광고가 나올 수 있어요! -
				</div>
				<BottomCTA.Double
					leftButton={
						<CTAButton
							color="dark"
							variant="weak"
							onClick={onBack}
						>
							이전
						</CTAButton>
					}
					rightButton={
						<CTAButton onClick={onNext}>
							확인했어요
						</CTAButton>
					}
				/>
			</div>
		</div>
	);
}
