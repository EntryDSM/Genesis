import * as S from "./style";

function ChangeLimitModal() {
  return (
    <S.Background>
      <S.Box>
        <S.Title>합격자 정원 변경</S.Title>
        <S.TableWrapper>
          <S.TrWrapper>
            <S.TitleBlock>
              <p>지역</p>
            </S.TitleBlock>
            <S.TitleBlock>
              <p>유형</p>
            </S.TitleBlock>
            <S.TitleBlock>
              <p>변경사항</p>
            </S.TitleBlock>
          </S.TrWrapper>
          <S.TrWrapper>
            <S.NormalBlock>
              <p id="title">대전</p>
            </S.NormalBlock>
            <S.NormalBlock>
              <S.SpreadBlock>
                <p>일반 전형</p>
                <p>마이스터 전형</p>
                <p>사회통합 전형</p>
              </S.SpreadBlock>
            </S.NormalBlock>
            <S.NormalBlock>
              <S.SpreadBlock>
                <Inputs />
                <Inputs />
                <Inputs />
              </S.SpreadBlock>
            </S.NormalBlock>
          </S.TrWrapper>
          <S.TrWrapper>
            <S.NormalBlock>
              <p id="title">전국</p>
            </S.NormalBlock>
            <S.NormalBlock>
              <S.SpreadBlock>
                <p>일반 전형</p>
                <p>마이스터 전형</p>
                <p>사회통합 전형</p>
              </S.SpreadBlock>
            </S.NormalBlock>
            <S.NormalBlock>
              <S.SpreadBlock>
                <Inputs />
                <Inputs />
                <Inputs />
              </S.SpreadBlock>
            </S.NormalBlock>
          </S.TrWrapper>
        </S.TableWrapper>
        <S.Button>확인</S.Button>
      </S.Box>
    </S.Background>
  );
}

function Inputs() {
  return (
    <S.InputWrapper>
      <input type="number" />
    </S.InputWrapper>
  );
}

export default ChangeLimitModal;
