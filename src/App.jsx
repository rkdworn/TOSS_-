



import React, { useState } from 'react';
import { Asset, Text, Post, Stepper, StepperRow, BottomCTA } from '@toss/tds-mobile';
import { adaptive } from '@toss/tds-colors';
import Main2 from './Main2';
import Airforce1 from './Airforce1';
import Army1 from './Army1';
import Navy1 from './Navy1';
import Society1 from './Society1';
// ...existing code...
import DepositInput1 from './DepositInput1';
import Loading from './Loading';
import AmountScreen from './AmountScreen';
import EndScreen from './EndScreen';
import AdLoader from './AdLoader';
import AdScreen from './AdScreen';
export default function App() {
  const [page, setPage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'main1';
    }

    const rawPath = window.location.pathname || '';
    const rawHash = window.location.hash ? window.location.hash.replace(/^#/, '') : '';
    const route = (rawHash || rawPath).replace(/^\//, '');

    switch (route) {
      case 'main2':
      case 'army1':
      case 'airforce1':
      case 'navy1':
      case 'society1':
      case 'depositInput1':
      case 'loading':
      case 'ad':
      case 'amount':
      case 'end':
        return route;
      default:
        return 'main1';
    }
  });
  const [months, setMonths] = useState(null); // 개월수 상태
  const [money, setMoney] = useState(''); // 납입금 상태
  const [amount, setAmount] = useState(null); // 계산된 총 금액
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [pendingAdShow, setPendingAdShow] = useState(false);

  // 단리 적금 계산 (매월 동일 금액, 연이율 5%)
  // 총액 + (개월수 × 납입금) 반환
  function calculateTotalWithPrincipal(months, money, rate = 0.05) {
    if (!months || !money) return 0;
    const principal = Number(money);
    const n = Number(months);
    const r = rate / 12; // 월이율
    // 만기 적금 공식: 매월 불입, 이자 매월 복리X, 단리
    // 이자 = 월불입금 * n(n+1)/2 * r
    // 총불입금 = 월불입금 * n
    // 최종표시 = (이자 + 총불입금) + (총불입금)
    const total = principal * n + principal * ((n * (n + 1)) / 2) * r;
    return Math.floor(total + principal * n);
  }

  React.useEffect(() => {
    if (page === 'loading') {
      setAmount(calculateTotalWithPrincipal(months, money, 0.05));
      setIsAdLoaded(false);
      setPendingAdShow(false);
    }
  }, [page, months, money]);

  if (page === 'main2') {
    return <Main2 onBack={() => setPage('main1')} onSelect={idx => {
      if (idx === 0) setPage('army1');
      else if (idx === 1) setPage('airforce1');
      else if (idx === 2) setPage('navy1');
      else if (idx === 3) setPage('society1');
    }} />;
  }
  if (page === 'society1') {
    // 사회1: 21개월
    return <Society1 onBack={() => setPage('main2')} onNext={() => { setMonths(21); setPage('depositInput1'); }} />;
  }

  if (page === 'depositInput1') {
    return <DepositInput1
      onBack={() => setPage('main2')}
      amount={money}
      onAmountChange={setMoney}
      onNext={() => setPage('loading')}
    />;
  }


  if (page === 'loading') {
    return (
      <>
        <Loading
          onBack={() => setPage('depositInput1')}
          onNext={() => {
            if (isAdLoaded) {
              setPage('ad');
            } else {
              setPendingAdShow(true);
            }
          }}
        />
        <AdLoader onLoaded={() => {
          setIsAdLoaded(true);
          if (pendingAdShow) {
            setPendingAdShow(false);
            setPage('ad');
          }
        }} />
      </>
    );
  }

  if (page === 'ad') {
    // 광고 노출 후 금액 화면으로 이동
    return <AdScreen onClose={() => setPage('amount')} />;
  }

  if (page === 'amount') {
    return <AmountScreen
      onBack={() => setPage('depositInput1')}
      onNext={() => setPage('end')}
      amount={amount}
    />;
  }

  if (page === 'end') {
    return <EndScreen onBack={() => setPage('amount')} />;
  }

  if (page === 'navy1') {
    // 해군1: 20개월
    return <Navy1 onBack={() => setPage('main2')} onNext={() => { setMonths(20); setPage('depositInput1'); }} />;
  }

  if (page === 'army1') {
    // 육군1: 18개월
    return <Army1 onBack={() => setPage('main2')} onNext={() => { setMonths(18); setPage('depositInput1'); }} />;
  }

  if (page === 'airforce1') {
    // 공군1: 21개월
    return <Airforce1 onBack={() => setPage('main2')} onNext={() => { setMonths(21); setPage('depositInput1'); }} />;
  }

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
        touchAction: 'none',
        overscrollBehavior: 'none',
      }}
      onTouchMove={e => e.preventDefault()}
    >
      {/* Toss 공통 네비게이션 바만 노출 (직접 구현 코드 제거) */}

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 24,
          flex: 1,
        }}
      >
        <Post.H2 style={{ paddingBottom: 24, color: '#191F28' }}>군적금 이렇게 계산해요!</Post.H2>
        <Asset.Icon
          frameShape={{ width: 169, height: 169 }}
          backgroundColor="transparent"
          name="icon-money-bag-green-weak"
          aria-hidden={true}
          ratio="1/1"
        />
        <Stepper style={{ width: '100%', marginTop: 32 }}>
          <StepperRow
            left={<StepperRow.NumberIcon number={1} />}
            center={
              <StepperRow.Texts
                type="A"
                title={<span style={{ color: '#191F28', fontWeight: 600 }}>군종을 선택해주세요</span>}
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={2} />}
            center={
              <StepperRow.Texts
                type="A"
                title={<span style={{ color: '#191F28', fontWeight: 600 }}>월 납입금을 선택해주세요</span>}
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={3} />}
            center={
              <StepperRow.Texts
                type="A"
                title={<span style={{ color: '#191F28', fontWeight: 600 }}>전역 후 받게 될 금액을 확인하세요</span>}
                description=""
              />
            }
            hideLine={true}
          />
        </Stepper>
      </div>

      {/* Bottom CTA */}
      <div style={{ marginTop: 'auto', marginBottom: 24 }}>
        <BottomCTA.Single loading={false} onClick={() => setPage('main2')}>확인했어요</BottomCTA.Single>
      </div>
    </div>
  );
}
