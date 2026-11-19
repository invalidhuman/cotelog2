import math

def solution(str1, str2):
    answer = 0
    
    inters = 0
    sums = 0
    
    # 공백/특수문자 제거 및 대소문자처리
    str1=str1.upper()
    str2=str2.upper()
    print(str1,str2)
    
    result1 = []
    result2 = []
    
    # "ABCDEF" 짝수 -> "AB" BC CD DE
    # "ABCDE" 홀수?
    # "AB CDE"
    # 배열로 변환 및 특수문자제거
    for i in range(len(str1)-1): # 0,1,2,3,..,n-1에서 n-1을 하면 안됨
        pair = str1[i:i+2] # i부터 i+1까지
        
        if (pair.isalpha() and pair.isascii()): result1.append(pair)
    
    for i in range(len(str2)-1): # 0,1,2,3,..,n-1에서 n-1을 하면 안됨
        pair = str2[i:i+2] # i부터 i+1까지
        
        if (pair.isalpha() and pair.isascii()): result2.append(pair)
    
    countA = {}
    countB = {}
    
    for x in result1: 
        countA[x] = countA.get(x,0) + 1
    
    for x in result2: 
        countB[x] = countB.get(x,0) + 1
    
    
    # A = {1,1,2,2,3}
    
    # pair를 돌면서 
        # 다른 dict에도 있는 key면 min,max비교
        # 없으면 합집합에만 넣기

    for pair in countA.keys():
        if (pair in countB.keys()):
            inters += min(countA[pair],countB[pair])
            sums += max(countA[pair],countB[pair])
        else:
            sums += countA[pair]
    
    # A -> B로만 검사완료해도 B에 있는게 A에 또 있지는 않을 것이니 이렇게 할 수 있고,
    # 대신 B에만 있는 것도 추가
    for pair in countB.keys():
        if pair not in countA.keys():
            sums += countB[pair]
        
    
    # { "AB":2, d.... }
    # .keys() .values()
    
    
    
    # 자카드 유사도를 dictionary로 파악
        # str1을 먼저해서 풀고
        # str2를 
    
    # [ ] 나눗셈이 정의되지 X -> 1
    
    # [ ] 중복처리
    # A = {1,1,2,2,3}
    # B = {1,2,2,4,5}
    # 교 : {1,2,2}
        # 1은 min(1,2)
        # 2는 min(2,2)
        # dict로 개수를 세놔야?
    # 합 : {1,1,2,2,3,4,5}
        # 1은 max(1,2)
        # 2는 max(2,2)
    # 따라서 3/7 = 0.42
    
    if (sums == 0):
        answer = 1
    else:
        answer = inters / sums
    
    
    return math.floor(answer * 65536)
    
    


# 클러스티링 -> 묶어서 보내주기
# 자카드 유사도 
# J(A,B) = 두 집합의 교집합 크기 / 합집합 크기

