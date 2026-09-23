import React from 'react';
import { Asset, BottomCTA, CTAButton, Spacing, Text } from '@toss/tds-mobile';

export default function Loading({ onBack, onShowResult, isAdLoaded, months, money }) {
  const formattedMoney = money ? Number(money).toLocaleString() : '0';

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
      {/* Top Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
        }}
      >
        <div style={{ marginBottom: 16, textAlign: 'center' }}>
          <Text
            display="block"
            typography="t2"
            fontWeight="bold"
            color="#191F28"
            style={{ marginBottom: 8 }}
          >
            계산 준비가 완료되었어요
          </Text>
          <Text display="block" typography="t5" color="#8B95A1" fontWeight="500">
            복무 기간 {months || 18}개월 · 매월 {formattedMoney}원 납입
          </Text>
        </div>

        <Asset.Lottie
          frameShape={{ width: 280 }}
          src="https://static.toss.im/lotties/loading/load-ripple.json"
          loop={true}
          speed={1}
          aria-hidden={true}
          style={{
            width: 280,
            height: 'fit-content',
            display: 'block',
            margin: '8px auto',
          }}
        />

        <div
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 16,
            padding: '16px 20px',
            width: '100%',
            maxWidth: 320,
            marginTop: 12,
            textAlign: 'center',
          }}
        >
          <Text display="block" typography="t6" color="#4E5968" fontWeight="600">
            은행 기본 금리(연 5%) + 정부 매칭지원금
          </Text>
          <Text display="block" typography="t7" color="#8B95A1" style={{ marginTop: 4 }}>
            만기 시 원금과 이자를 함께 계산했어요
          </Text>
        </div>
      </div>

      {/* Bottom CTA Area */}
      <div style={{ marginTop: 'auto', marginBottom: 24, padding: '0 16px' }}>
        {isAdLoaded && (
          <div
            style={{
              fontSize: 13,
              color: '#8B95A1',
              fontWeight: 500,
              lineHeight: 1.4,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            광고 시청 후 전역 시 수령할 상세 금액을 확인할 수 있어요
          </div>
        )}
        <BottomCTA.Double
          leftButton={
            <CTAButton color="dark" variant="weak" onClick={onBack}>
              이전
            </CTAButton>
          }
          rightButton={
            <CTAButton onClick={onShowResult}>
              {isAdLoaded ? '광고 보고 결과 확인하기' : '결과 확인하기'}
            </CTAButton>
          }
        />
      </div>
    </div>
  );
}
