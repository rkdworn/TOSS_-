import React, { useState } from 'react';
import { Asset, Post, Stepper, StepperRow, BottomCTA } from '@toss/tds-mobile';
import Main2 from './Main2';
import Airforce1 from './Airforce1';
import Army1 from './Army1';
import Navy1 from './Navy1';
import Society1 from './Society1';
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
  const [adSessionKey, setAdSessionKey] = useState(0);

  // 단리 적금 계산 (매월 동일 금액, 연이율 5% + 정부 매칭지원금 100%)
  function calculateTotalWithPrincipal(monthsCount, depositMoney, rate = 0.05) {
    if (!monthsCount || !depositMoney) return 0;
    const principal = Number(depositMoney);
    const n = Number(monthsCount);
    const r = rate / 12; // 월이율
    // 은행 만기 이자 = 월불입금 * n(n+1)/2 * r
    const interest = principal * ((n * (n + 1)) / 2) * r;
    // 원금 합계 = 월불입금 * n
    const totalPrincipal = principal * n;
    // 정부 매칭지원금 (원금 100% 매칭 기준)
    const matchingSupport = totalPrincipal;
    // 최종 만기 수령 예상액 = 원금 + 이자 + 매칭지원금
    return Math.floor(totalPrincipal + interest + matchingSupport);
  }

  // 계산 수행
  const handleCalculate = () => {
    const calculated = calculateTotalWithPrincipal(months, money, 0.05);
    setAmount(calculated);
    setPage('loading');
  };

  const handleReset = () => {
    setMonths(null);
    setMoney('');
    setAmount(null);
    setPage('main1');
  };

  // 군종 선택 화면 (Main2)
  if (page === 'main2') {
    return (
      <>
        {/* 백그라운드 광고 사전 로딩 */}
        <AdLoader
          key={adSessionKey}
          onLoaded={() => setIsAdLoaded(true)}
          onError={() => setIsAdLoaded(false)}
        />
        <Main2
          onBack={() => setPage('main1')}
          onSelect={idx => {
            if (idx === 0) setPage('army1'); // 육군 · 해병대 (18개월)
            else if (idx === 1) setPage('navy1'); // 해군 (20개월)
            else if (idx === 2) setPage('airforce1'); // 공군 (21개월)
            else if (idx === 3) setPage('society1'); // 사회복무요원 (21개월)
          }}
        />
      </>
    );
  }

  // 육군 / 해병대 (18개월)
  if (page === 'army1') {
    return (
      <Army1
        onBack={() => setPage('main2')}
        onNext={() => {
          setMonths(18);
          setPage('depositInput1');
        }}
      />
    );
  }

  // 해군 (20개월)
  if (page === 'navy1') {
    return (
      <Navy1
        onBack={() => setPage('main2')}
        onNext={() => {
          setMonths(20);
          setPage('depositInput1');
        }}
      />
    );
  }

  // 공군 (21개월)
  if (page === 'airforce1') {
    return (
      <Airforce1
        onBack={() => setPage('main2')}
        onNext={() => {
          setMonths(21);
          setPage('depositInput1');
        }}
      />
    );
  }

  // 사회복무요원 (21개월)
  if (page === 'society1') {
    return (
      <Society1
        onBack={() => setPage('main2')}
        onNext={() => {
          setMonths(21);
          setPage('depositInput1');
        }}
      />
    );
  }

  // 납입금 입력 화면
  if (page === 'depositInput1') {
    return (
      <>
        {/* 사전 로딩 확인 */}
        <AdLoader
          key={adSessionKey}
          onLoaded={() => setIsAdLoaded(true)}
          onError={() => setIsAdLoaded(false)}
        />
        <DepositInput1
          onBack={() => setPage('main2')}
          amount={money}
          onAmountChange={setMoney}
          onNext={handleCalculate}
        />
      </>
    );
  }

  // 계산 완료 & 결과 확인 전 단계 (사전 로드된 광고 시청 또는 바로 확인 선택)
  if (page === 'loading') {
    return (
      <Loading
        onBack={() => setPage('depositInput1')}
        months={months}
        money={money}
        isAdLoaded={isAdLoaded}
        onShowResult={() => {
          if (isAdLoaded) {
            setPage('ad');
          } else {
            setPage('amount');
          }
        }}
      />
    );
  }

  // 광고 화면
  if (page === 'ad') {
    return (
      <AdScreen
        onClose={() => {
          setIsAdLoaded(false);
          setAdSessionKey(prev => prev + 1); // 다음 계산을 위해 백그라운드 사전 로드 갱신
          setPage('amount');
        }}
      />
    );
  }

  // 계산 결과 금액 화면
  if (page === 'amount') {
    return (
      <AmountScreen
        onBack={() => setPage('depositInput1')}
        onNext={() => setPage('end')}
        amount={amount}
      />
    );
  }

  // 종료 및 응원 화면 (다시 계산하기 액션 제공)
  if (page === 'end') {
    return (
      <EndScreen
        onBack={() => setPage('amount')}
        onRestart={handleReset}
      />
    );
  }

  // 첫 진입 화면 (main1)
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
      {/* 앱 진입 시 백그라운드 광고 사전 로딩 */}
      <AdLoader
        key={adSessionKey}
        onLoaded={() => setIsAdLoaded(true)}
        onError={() => setIsAdLoaded(false)}
      />

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
      <div style={{ marginTop: 'auto', marginBottom: 24, padding: '0 16px' }}>
        <BottomCTA.Single loading={false} onClick={() => setPage('main2')}>
          시작하기
        </BottomCTA.Single>
      </div>
    </div>
  );
}
