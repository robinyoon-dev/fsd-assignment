import { Link } from "react-router-dom";

/**
 * TODO: 공통 위젯 - 네비게이션 컴포넌트 추가
 * - 홈, 즐겨찾기 페이지 이동 기능
 */
export function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}