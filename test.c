#include<stdio.h>
int main(){
    int eng, cs, math, phy, bio, result;
    printf("enter marks of student\n");
    scanf("%d %d %d %d %d", &eng, &cs, &math, &phy, &bio);
    
     if((eng+cs+math+phy+bio)<=90 && (eng+cs+math+phy+bio)>=80){
        printf("Grade A Passed\n");
    }
    else if((eng+cs+math+phy+bio)<=80){
        printf("Grade B Passed\n");
    }
    else if((eng+cs+math+phy+bio)<=70){
        printf("Grade C Passed\n");
    }
    else if((eng+cs+math+phy+bio)>=60){
        printf("Grade D Passed\n");
    }

    return 0;
}