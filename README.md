# tistory_toc
tistory 블로그 원문에 table of content 를 자동으로 생성해줍니다.

# 자랑거리
매번 글을 작성할때마다 toc를 위한 태그를 입력하지 않아도 됩니다.\
스킨편집에서 최초 구조만 등록해 놓으면 그 이후부터는 알아서 처리해줍니다.

## 사용 방법
### 다운로드
tistory_toc.js\
tistory_toc.css

> 따로 링크가 없습니다. 소스내에서 찾아주세요.

경로
```
https://github.com/lejewk/tistory_toc/tree/master/src/assert
```

### Tistory 파일 업로드
다운받은 js와 css를 업로드 합니다.

### Assert 추가
```
<link rel="stylesheet" href="./images/tistory_toc.css" />
<script type="text/javascript"src="./images/tistory_toc.js?v=1"></script>
``` 

### HTML 수정
원문이 출력되는 [##_article_rep_desc_##] 를 찾고 바로 위에 
```
<div class="toc"></div>
```
를 입력해주세요.

Eg)

```
<div class="article">
    <div class="toc"></div>
    [##_article_rep_desc_##]
</div>
```

### 스크립트 실행
```
<script>
$(document).ready(function() {
    TOC.create();
});
</script>
```

# 제약사항
- h1 ~ h3 까지만 지원
- 제한적 dom
