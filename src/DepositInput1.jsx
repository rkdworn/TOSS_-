import React, { useState } from 'react';
import {
  Asset,
  Text,
  Spacing,
  BottomCTA,
} from '@toss/tds-mobile';
import { adaptive } from '@toss/tds-colors';

function formatNumber(value) {
  if (!value) return '';
  const num = value.replace(/[^0-9]/g, '');
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function DepositInput1({ onBack, onNext, amount, onAmountChange }) {

  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        minHeight: '100dvh',
        backgroundColor: 'var(--token-tds-color-white, var(--adaptiveBackground, #fff))',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        touchAction: 'none',
        overscrollBehavior: 'none',
      }}
      onTouchMove={e => e.preventDefault()}
    >
      {/* Toss 공통 네비게이션 바만 노출 (직접 구현 코드 제거) */}
      <Spacing size={12} />
      <div style={{ padding: '0 24px', marginTop: 32, marginBottom: 16 }}>
        <Text typography="t4" color="#191F28" fontWeight="bold">
          매달 적금에 얼마를 납입하나요?
        </Text>
      </div>
      <div style={{ position: 'relative', marginTop: 8, marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          style={{
            width: 'calc(100vw - 40px)',
            maxWidth: 320,
            fontSize: 28,
            fontWeight: 'bold',
            border: 'none',
            borderBottom: '2px solid #3182F6',
            outline: 'none',
            textAlign: 'left',
            background: 'transparent',
            color: '#191F28',
            paddingRight: 36,
          }}
          value={formatNumber(amount)}
          placeholder="금액"
          inputMode="numeric"
          onChange={e => onAmountChange(e.target.value.replace(/[^0-9]/g, ''))}
        />
        {amount && (
          <button
            type="button"
            aria-label="입력값 지우기"
            onClick={() => onAmountChange('')}
            style={{
              position: 'absolute',
              right: 32,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#E5E8EB" />
              <path d="M7.5 7.5L12.5 12.5M12.5 7.5L7.5 12.5" stroke="#A6ACB2" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ margin: '0 16px 24px 16px' }}>
        <BottomCTA.Single loading={false} onClick={onNext}>확인</BottomCTA.Single>
      </div>
    </div>
  );
}
