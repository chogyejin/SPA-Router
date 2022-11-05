# SPA-Router
## 구현
- Router.tsx
    - ReactNode 타입의 `children` 을 받음
    - `currentPath` state를 가지며 컴포넌트가 마운트되면 useEffect에서 이벤트 등록(`window.addEventListener("popstate", onLocationChange)`) ⇒ history 변화 이벤트 감지
    - currentPath를 갖도록 children을 매핑시켜 `childrenWithProps` return
- Route.tsx
    - props 내려오는 `currentPath`와 사용자가 내려주는 `path` 를 비교하여 component 혹은 null 반환
- useRouter.ts
    - `push` 작성: pushState 사용, popstate 커스텀 이벤트 navEvent를 처리(dispatch)
- 참고
    - [[ReactNode, ReactChild, ReactElement](https://merrily-code.tistory.com/209)]
    - [[구현 참고](https://ncoughlin.com/posts/react-navigation-without-react-router/)]
        - [PopStateEvent](https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent)
        - [[cloneElement 사용](https://stackoverflow.com/questions/50296982/cloneelement-type-has-no-properties-in-common-with-type-partialp-attributes)]
