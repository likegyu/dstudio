import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface ContactInfo {
  name: string;
  url: string;
  phone: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

interface SectionData {
  number: string;
  title: string;
  content?: string | null;
  bullets?: string[];
  extraParagraphs?: string[];
  table?: TableData;
  contactInfo?: ContactInfo[];
}

interface PrivacyLocaleContent {
  title: string;
  backLabel: string;
  effectiveDate: string;
  metaDescription: string;
  sections: SectionData[];
}

const privacyContent: Record<Locale, PrivacyLocaleContent> = {
  ko: {
    title: "개인정보 처리방침",
    backLabel: "홈으로 돌아가기",
    effectiveDate: "시행일: 2026년 2월 8일",
    metaDescription: "Dstudio 개인정보 처리방침",
    sections: [
      {
        number: "1",
        title: "개인정보의 수집 및 이용 목적",
        content: `Dstudio(이하 "회사")는 to dot 등 회사가 운영하는 서비스(이하 "서비스")에서 다음의 목적을 위해 개인정보를 수집·이용합니다.`,
        bullets: [
          "회원 가입 및 관리: 회원 식별, 로그인 처리, 서비스 이용 관리",
          "서비스 제공: 습관 기록 저장, 친구 기능, 데이터 동기화",
          "구독 관리: 구독 상태 확인 및 프리미엄 기능 제공 (결제는 Apple이 직접 처리하며, 회사는 결제 정보를 수집하지 않아요)",
          "서비스 개선: 서비스 사용 통계 분석 및 품질 향상",
        ],
      },
      {
        number: "2",
        title: "수집하는 개인정보의 항목",
        content: null,
        bullets: [
          "필수 항목: 이메일 주소, 비밀번호(암호화), 사용자 ID",
          "선택 항목: 이름(닉네임), 프로필 사진, 상태 메시지, 커스텀 ID",
          "자동 수집 항목: 서비스 이용 기록(습관 데이터, 접속 시간), 온라인 상태, 최근 접속 시간, 구독 상태",
          "기기 권한: 알림 권한(푸시 알림 전송용), 스크린타임 권한(집중 모드의 앱 차단 기능용, 선택)",
        ],
        extraParagraphs: [
          "Apple 로그인 시: Apple에서 제공하는 사용자 식별자, 이름(선택), 이메일(선택)",
          "※ 구독 결제 정보(카드 번호, 결제 내역 등)는 Apple이 직접 처리하며, 회사에서는 수집하거나 저장하지 않아요.",
        ],
      },
      {
        number: "3",
        title: "개인정보의 보유 및 이용 기간",
        content: null,
        bullets: [
          "회원 탈퇴 시까지 보유하며, 탈퇴 즉시 모든 데이터를 삭제합니다.",
          "회원 탈퇴 시 서버에 저장된 모든 개인정보(프로필, 습관 기록, 친구 목록, 프로필 사진)가 즉시 파기됩니다.",
          "단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보존합니다.",
        ],
      },
      {
        number: "4",
        title: "개인정보의 제3자 제공",
        content:
          "회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.",
        bullets: [
          "이용자가 사전에 동의한 경우",
          "법령의 규정에 의한 경우",
          "구독 결제 처리: Apple Inc.가 App Store를 통해 결제를 처리해요. 이 과정에서 Apple의 개인정보 처리방침이 적용돼요.",
        ],
      },
      {
        number: "5",
        title: "개인정보의 국외 이전",
        content:
          "회사는 서비스 제공을 위해 다음과 같이 개인정보를 국외로 이전합니다.",
        table: {
          headers: ["항목", "내용"],
          rows: [
            ["이전받는 자", "Supabase Inc."],
            ["이전되는 국가", "미국"],
            ["이전 일시 및 방법", "서비스 이용 시 네트워크를 통한 전송"],
            [
              "이전되는 항목",
              "이메일, 사용자 ID, 이름, 프로필 사진, 상태 메시지, 습관 기록, 친구 목록",
            ],
            [
              "이전받는 자의 이용 목적",
              "클라우드 데이터베이스 및 인증 서비스 제공",
            ],
            [
              "이전받는 자의 보유·이용 기간",
              "회원 탈퇴 시 또는 서비스 이용 계약 종료 시까지",
            ],
          ],
        },
        extraParagraphs: [
          "Supabase는 SOC 2 Type II 인증을 받은 클라우드 서비스로, 데이터 보호를 위한 기술적·관리적 조치를 시행하고 있습니다.",
        ],
      },
      {
        number: "6",
        title: "개인정보의 파기 절차 및 방법",
        content: null,
        bullets: [
          "파기 절차: 회원 탈퇴 요청 시 즉시 파기합니다.",
          "파기 방법: 전자적 파일은 복구 불가능한 방법으로 삭제합니다.",
          '서비스 내 "설정 > 계정 삭제" 기능을 통해 직접 탈퇴할 수 있습니다.',
        ],
      },
      {
        number: "7",
        title: "이용자의 권리·의무 및 행사 방법",
        content: "이용자는 언제든지 다음의 권리를 행사할 수 있습니다.",
        bullets: [
          "개인정보 열람 요구",
          "개인정보 정정·삭제 요구",
          "개인정보 처리 정지 요구",
          "회원 탈퇴(계정 삭제)",
        ],
        extraParagraphs: [
          '위 권리는 서비스 내 "설정" 메뉴를 통해 직접 행사하거나, 개인정보 보호책임자에게 연락하여 행사할 수 있습니다.',
        ],
      },
      {
        number: "8",
        title: "개인정보의 안전성 확보 조치",
        content:
          "회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.",
        bullets: [
          "비밀번호 암호화 저장",
          "SSL/TLS를 통한 데이터 전송 암호화",
          "JWT(JSON Web Token) 기반 인증",
          "데이터베이스 행 단위 접근 제어(Row Level Security)",
          "인증 토큰의 안전한 기기 내 저장(Keychain)",
          "개인정보 최소 수집 원칙 준수",
        ],
      },
      {
        number: "9",
        title: "개인정보 보호책임자",
        content:
          "회사의 개인정보 처리에 관한 업무를 총괄하는 개인정보 보호책임자는 다음과 같습니다.",
        bullets: [
          "책임자: Dstudio 운영팀",
          "이메일: admin@dstudio.kr",
        ],
        extraParagraphs: [
          "개인정보 침해에 대한 신고·상담 기관:",
        ],
        contactInfo: [
          {
            name: "개인정보침해 신고센터",
            url: "privacy.kisa.or.kr",
            phone: "118",
          },
          {
            name: "개인정보 분쟁조정위원회",
            url: "kopico.go.kr",
            phone: "1833-6972",
          },
        ],
      },
      {
        number: "10",
        title: "개인정보 처리방침의 변경",
        content: "이 개인정보 처리방침은 2026년 2월 8일부터 적용됩니다.",
        extraParagraphs: [
          "개인정보 처리방침이 변경되는 경우 서비스 내 공지를 통해 변경 사항을 알려드립니다.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    backLabel: "Back to Home",
    effectiveDate: "Effective Date: February 8, 2026",
    metaDescription: "Dstudio Privacy Policy",
    sections: [
      {
        number: "1",
        title: "Purpose of Collecting and Using Personal Information",
        content: `Dstudio (hereinafter "the Company") collects and uses personal information for the following purposes in connection with its services, including to dot (hereinafter "the Services"):`,
        bullets: [
          "Account Registration and Management: User identification, login processing, and service usage management",
          "Service Provision: Storing habit records, friend features, and data synchronization",
          "Subscription Management: Verifying subscription status and providing premium features (payments are processed directly by Apple; the Company does not collect payment information)",
          "Service Improvement: Analyzing service usage statistics and improving quality",
        ],
      },
      {
        number: "2",
        title: "Types of Personal Information Collected",
        content: null,
        bullets: [
          "Required: Email address, password (encrypted), user ID",
          "Optional: Name (nickname), profile photo, status message, custom ID",
          "Automatically Collected: Service usage records (habit data, access times), online status, last access time, subscription status",
          "Device Permissions: Notification permission (for push notifications), Screen Time permission (for Focus Mode app blocking, optional)",
        ],
        extraParagraphs: [
          "When signing in with Apple: User identifier provided by Apple, name (optional), email (optional)",
          "Note: Subscription payment information (card numbers, payment history, etc.) is processed directly by Apple and is not collected or stored by the Company.",
        ],
      },
      {
        number: "3",
        title: "Retention and Usage Period of Personal Information",
        content: null,
        bullets: [
          "Personal information is retained until account deletion, at which point all data is immediately deleted.",
          "Upon account deletion, all personal information stored on our servers (profile, habit records, friend list, profile photo) is immediately destroyed.",
          "However, if retention is required by applicable laws, information will be retained for the legally required period.",
        ],
      },
      {
        number: "4",
        title: "Provision of Personal Information to Third Parties",
        content:
          "The Company does not, in principle, provide users' personal information to third parties. However, exceptions are made in the following cases:",
        bullets: [
          "When the user has given prior consent",
          "When required by law or regulation",
          "Subscription payment processing: Apple Inc. processes payments through the App Store. Apple's privacy policy applies to this process.",
        ],
      },
      {
        number: "5",
        title: "International Transfer of Personal Information",
        content:
          "The Company transfers personal information internationally for service provision as follows:",
        table: {
          headers: ["Item", "Details"],
          rows: [
            ["Recipient", "Supabase Inc."],
            ["Country", "United States"],
            [
              "Timing and Method",
              "Transmission via network during service use",
            ],
            [
              "Information Transferred",
              "Email, user ID, name, profile photo, status message, habit records, friend list",
            ],
            [
              "Purpose of Use by Recipient",
              "Providing cloud database and authentication services",
            ],
            [
              "Retention Period by Recipient",
              "Until account deletion or termination of service agreement",
            ],
          ],
        },
        extraParagraphs: [
          "Supabase is a SOC 2 Type II certified cloud service that implements technical and organizational measures for data protection.",
        ],
      },
      {
        number: "6",
        title:
          "Procedures and Methods for Destroying Personal Information",
        content: null,
        bullets: [
          "Destruction Procedure: Personal information is destroyed immediately upon account deletion request.",
          "Destruction Method: Electronic files are deleted using methods that prevent recovery.",
          'Users can delete their account directly through "Settings > Delete Account" in the Services.',
        ],
      },
      {
        number: "7",
        title: "Rights and Obligations of Users and How to Exercise Them",
        content:
          "Users may exercise the following rights at any time:",
        bullets: [
          "Request to access personal information",
          "Request to correct or delete personal information",
          "Request to suspend processing of personal information",
          "Account deletion (withdrawal)",
        ],
        extraParagraphs: [
          'These rights can be exercised directly through the "Settings" menu in the Services or by contacting the Privacy Officer.',
        ],
      },
      {
        number: "8",
        title: "Measures to Ensure Security of Personal Information",
        content:
          "The Company takes the following measures to ensure the security of personal information:",
        bullets: [
          "Encrypted password storage",
          "Data transmission encryption via SSL/TLS",
          "JWT (JSON Web Token) based authentication",
          "Database row-level access control (Row Level Security)",
          "Secure on-device storage of authentication tokens (Keychain)",
          "Adherence to the principle of minimum data collection",
        ],
      },
      {
        number: "9",
        title: "Privacy Officer",
        content:
          "The Privacy Officer responsible for overseeing all matters related to the processing of personal information is as follows:",
        bullets: [
          "Officer: Dstudio Operations Team",
          "Email: admin@dstudio.kr",
        ],
        extraParagraphs: [
          "For reports or consultations regarding privacy violations:",
        ],
        contactInfo: [
          {
            name: "Personal Information Infringement Report Center (Korea)",
            url: "privacy.kisa.or.kr",
            phone: "118",
          },
          {
            name: "Personal Information Dispute Mediation Committee (Korea)",
            url: "kopico.go.kr",
            phone: "1833-6972",
          },
        ],
      },
      {
        number: "10",
        title: "Changes to This Privacy Policy",
        content:
          "This Privacy Policy is effective as of February 8, 2026.",
        extraParagraphs: [
          "Any changes to this Privacy Policy will be announced through the Services.",
        ],
      },
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    backLabel: "ホームに戻る",
    effectiveDate: "施行日: 2026年2月8日",
    metaDescription: "Dstudio プライバシーポリシー",
    sections: [
      {
        number: "1",
        title: "個人情報の収集および利用目的",
        content: `Dstudio（以下「当社」）は、to dotをはじめとする当社が運営するサービス（以下「本サービス」）において、以下の目的で個人情報を収集・利用します。`,
        bullets: [
          "会員登録および管理: 会員識別、ログイン処理、サービス利用管理",
          "サービス提供: 習慣記録の保存、フレンド機能、データ同期",
          "サブスクリプション管理: サブスクリプション状態の確認およびプレミアム機能の提供（決済はAppleが直接処理し、当社は決済情報を収集しません）",
          "サービス改善: サービス利用統計の分析および品質の向上",
        ],
      },
      {
        number: "2",
        title: "収集する個人情報の項目",
        content: null,
        bullets: [
          "必須項目: メールアドレス、パスワード（暗号化）、ユーザーID",
          "任意項目: 名前（ニックネーム）、プロフィール写真、ステータスメッセージ、カスタムID",
          "自動収集項目: サービス利用記録（習慣データ、アクセス時間）、オンライン状態、最終アクセス時間、サブスクリプション状態",
          "デバイス権限: 通知権限（プッシュ通知送信用）、スクリーンタイム権限（集中モードのアプリブロック機能用、任意）",
        ],
        extraParagraphs: [
          "Apple IDでサインインする場合: Appleが提供するユーザー識別子、名前（任意）、メールアドレス（任意）",
          "※ サブスクリプション決済情報（カード番号、決済履歴など）はAppleが直接処理し、当社では収集・保存しません。",
        ],
      },
      {
        number: "3",
        title: "個人情報の保有および利用期間",
        content: null,
        bullets: [
          "退会時まで保有し、退会と同時にすべてのデータを削除します。",
          "退会時にサーバーに保存されたすべての個人情報（プロフィール、習慣記録、フレンドリスト、プロフィール写真）が即時破棄されます。",
          "ただし、関係法令により保存が必要な場合は、当該期間中保存します。",
        ],
      },
      {
        number: "4",
        title: "個人情報の第三者提供",
        content:
          "当社は原則として利用者の個人情報を第三者に提供しません。ただし、以下の場合は例外とします。",
        bullets: [
          "利用者が事前に同意した場合",
          "法令の規定による場合",
          "サブスクリプション決済処理: Apple Inc.がApp Storeを通じて決済を処理します。この過程でAppleのプライバシーポリシーが適用されます。",
        ],
      },
      {
        number: "5",
        title: "個人情報の国外移転",
        content:
          "当社はサービス提供のため、以下のとおり個人情報を国外に移転します。",
        table: {
          headers: ["項目", "内容"],
          rows: [
            ["移転先", "Supabase Inc."],
            ["移転先の国", "アメリカ合衆国"],
            ["移転の時期および方法", "サービス利用時にネットワークを通じた送信"],
            [
              "移転される項目",
              "メールアドレス、ユーザーID、名前、プロフィール写真、ステータスメッセージ、習慣記録、フレンドリスト",
            ],
            [
              "移転先の利用目的",
              "クラウドデータベースおよび認証サービスの提供",
            ],
            [
              "移転先の保有・利用期間",
              "退会時またはサービス利用契約終了時まで",
            ],
          ],
        },
        extraParagraphs: [
          "Supabaseは SOC 2 Type II 認証を取得したクラウドサービスであり、データ保護のための技術的・管理的措置を実施しています。",
        ],
      },
      {
        number: "6",
        title: "個人情報の破棄手続きおよび方法",
        content: null,
        bullets: [
          "破棄手続き: 退会リクエスト時に即時破棄します。",
          "破棄方法: 電子ファイルは復元不可能な方法で削除します。",
          "本サービス内の「設定 > アカウント削除」機能から直接退会できます。",
        ],
      },
      {
        number: "7",
        title: "利用者の権利・義務および行使方法",
        content: "利用者はいつでも以下の権利を行使できます。",
        bullets: [
          "個人情報の閲覧請求",
          "個人情報の訂正・削除請求",
          "個人情報の処理停止請求",
          "退会（アカウント削除）",
        ],
        extraParagraphs: [
          "上記の権利は本サービス内の「設定」メニューから直接行使するか、個人情報保護責任者に連絡して行使できます。",
        ],
      },
      {
        number: "8",
        title: "個人情報の安全性確保措置",
        content:
          "当社は個人情報の安全性確保のため、以下の措置を講じています。",
        bullets: [
          "パスワードの暗号化保存",
          "SSL/TLSによるデータ転送の暗号化",
          "JWT（JSON Web Token）ベースの認証",
          "データベースの行レベルアクセス制御（Row Level Security）",
          "認証トークンのデバイス内安全保存（Keychain）",
          "個人情報の最小収集原則の遵守",
        ],
      },
      {
        number: "9",
        title: "個人情報保護責任者",
        content:
          "当社の個人情報処理に関する業務を統括する個人情報保護責任者は以下のとおりです。",
        bullets: [
          "責任者: Dstudio 運営チーム",
          "メール: admin@dstudio.kr",
        ],
        extraParagraphs: [
          "個人情報の侵害に関する申告・相談機関:",
        ],
        contactInfo: [
          {
            name: "個人情報侵害申告センター（韓国）",
            url: "privacy.kisa.or.kr",
            phone: "118",
          },
          {
            name: "個人情報紛争調停委員会（韓国）",
            url: "kopico.go.kr",
            phone: "1833-6972",
          },
        ],
      },
      {
        number: "10",
        title: "プライバシーポリシーの変更",
        content:
          "このプライバシーポリシーは2026年2月8日から適用されます。",
        extraParagraphs: [
          "プライバシーポリシーが変更される場合、本サービス内のお知らせを通じて変更内容をご案内します。",
        ],
      },
    ],
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = privacyContent[locale as Locale] ?? privacyContent.ko;
  return {
    title: `${content.title} | dstudio`,
    description: content.metaDescription,
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  // getDictionary call to stay consistent with other pages
  await getDictionary(locale as Locale);
  const content = privacyContent[locale as Locale] ?? privacyContent.ko;

  return (
    <div className="min-h-screen bg-cream-white">
      {/* Sticky back navigation */}
      <nav className="sticky top-0 z-40 border-b border-primary-light/60 bg-cream-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-5 md:px-10">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{ fontFamily: "var(--font-zilla-slab)" }}
            >
              dstudio
            </span>
            <span className="text-text-muted">|</span>
            <span>{content.backLabel}</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-5 py-12 md:px-10 md:py-16">
        {/* Header */}
        <header className="mb-12">
          <h1
            className="mb-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
            style={{ fontFamily: "var(--font-zilla-slab)" }}
          >
            {content.title}
          </h1>
          <div className="inline-block rounded-full bg-warm-beige px-4 py-1.5 text-sm font-medium text-primary-dark">
            {content.effectiveDate}
          </div>
        </header>

        {/* Divider */}
        <div className="mb-10 h-px bg-primary-light/80" />

        {/* Sections */}
        <div className="space-y-10">
          {content.sections.map((section) => (
            <Section key={section.number} section={section} />
          ))}
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-primary-light/60 bg-warm-beige/40">
        <div className="mx-auto max-w-3xl px-5 py-8 text-center md:px-10">
          <p
            className="text-sm text-text-muted"
            style={{ fontFamily: "var(--font-zilla-slab)" }}
          >
            &copy; 2026 dstudio
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({ section }: { section: SectionData }) {
  return (
    <section>
      {/* Section heading */}
      <h2 className="mb-4 flex items-baseline gap-3 text-lg font-semibold text-text-primary md:text-xl">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {section.number}
        </span>
        <span>{section.title}</span>
      </h2>

      {/* Content paragraph */}
      {section.content && (
        <p className="mb-3 pl-10 text-[15px] leading-relaxed text-text-secondary">
          {section.content}
        </p>
      )}

      {/* Bullet list */}
      {section.bullets && (
        <ul className="mb-3 space-y-2 pl-10">
          {section.bullets.map((item, i) => (
            <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Table */}
      {section.table && (
        <div className="mb-3 overflow-x-auto pl-10">
          <table className="w-full border-collapse overflow-hidden rounded-lg text-[15px]">
            <thead>
              <tr className="bg-warm-beige">
                {section.table.headers.map((header, i) => (
                  <th
                    key={i}
                    className="border border-primary-light px-4 py-2.5 text-left font-semibold text-primary-dark"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr
                  key={i}
                  className="transition-colors hover:bg-soft-linen/50"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border border-primary-light/60 px-4 py-2.5 text-text-secondary ${
                        j === 0 ? "font-medium text-text-primary" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Extra paragraphs */}
      {section.extraParagraphs && (
        <div className="space-y-2 pl-10">
          {section.extraParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] leading-relaxed text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Contact info blocks */}
      {section.contactInfo && (
        <div className="mt-3 space-y-2 pl-10">
          {section.contactInfo.map((contact, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-warm-beige/60 px-4 py-2.5 text-[14px] text-text-secondary"
            >
              <span className="font-medium text-text-primary">
                {contact.name}
              </span>
              <span className="text-text-muted">|</span>
              <span className="text-primary">{contact.url}</span>
              <span className="text-text-muted">|</span>
              <span>{contact.phone}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
