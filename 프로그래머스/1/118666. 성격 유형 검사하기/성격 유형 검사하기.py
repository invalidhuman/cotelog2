# 1안. 걍 알파벳별로 8개 넣어두고 나중에 처리한다
# 2안. key 자체를 "NA" 이런식으로 두고 값을 +,-로 한다
# 3안. RT TR FC CF .. 8개를 다 넣어놓고 상대적으로 처리
    # 기준을 하나로 정하고 (ex. RT)
    # ex. RT가 +3이고 TR이 +2면 RT= +1 -> R형

def solution(survey, choices):
    answer = []
    
    dict = {"RT":0, "CF":0,"JM":0,"AN":0}
    
    # ["AN","CF","MJ","RT","NA"]
    
    # 함수를 설계해서 1~7에 대해 뭘 +할건지를 정해야하나?
    # 같은 계열에 대해 어떻게 +를 따질지
    
    # 각 유형별 알파벳 정의 (dictonary)
    # 다 0
    
    # 반복문
        # survey[i][0]
        # survey[i][1]
        # 구분해서 Dictionary에 +,- 반영
        
        # AN, NA 가 같을수있지만 앞에 오는 게 매우 비동의
        # 뒤에 오는게 매우 동의에 가까움
        
    # map = {}
    # print(list("NA"))
    
    for i in range(len(survey)):
        num = choices[i] - 4
        
        first = survey[i][0]
        second = survey[i][1]
        
        temp = ''.join(sorted([first,second]))
        print(temp)
        
        if (temp == ''.join(survey[i])):
            print('같음')
            dict[temp] += num
            
            
        else:
            print('다름')
            dict[temp] -= num
        
        # print(temp)
        
        # 일단 들어오자마자 정렬을 해버리고 기존과 같은지 확인
        # 정렬했는데 같으면 -> 점수 그대로 입력
        # 다르면 -> 점수를 반대로 입력 x(-1)
        
        # choices[i]

        print(dict)
    
    
    # 같은 경우 제어 : 두 알파베 중 사전 순
    # 이 경우 미리 각 -1,1에 대한 알파벳이 뭔지 파악해둘필요 O
    
    # RT CF JM AN 순으로 7,3,6,4 여야할 각 키를
    # 3,-1,2,0이런식으로 보정이 되었으므로 (offset)
    # <=0이면 사전순으로 알파벳이 빠른 성격유형을
    # > 이면 사전순으로 알파벳이 느린 성격유형을 배열에 추가하면 된다.
    # dictionary 에서부터 미리 사전순으로 정렬된 키를 사용했기 때문에 가능한 방법이며,
        # 선택지가 모르겠음(4)인 경우도 성격유형 점수 0점으로 이미 들어갔으니 따로 처리하지 않아도 된다.

    
    for kind, val in dict.items():
        if (val <= 0):
            answer.append(kind[0])
        else:
            answer.append(kind[1])
    
    
    return ''.join(answer)


# RCJA ~ TFMN
# -3,-2-1,0,+1,2,3로 해야할듯
# 