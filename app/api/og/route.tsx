import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9fafb',
          padding: '80px 120px',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              backgroundColor: '#2563eb',
              marginBottom: '48px',
            }}
          >
            <span
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              O
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: '800',
              color: '#F9FAFB',
              margin: '0 0 24px 0',
              textAlign: 'center',
              lineHeight: '1.1',
            }}
          >
            Optionify Help
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '36px',
              color: '#374151',
              margin: '0',
              textAlign: 'center',
              lineHeight: '1.4',
              maxWidth: '900px',
            }}
          >
            Shopify Product Options & Custom Fields Guide
          </p>

          {/* Simple Accent Line */}
          <div
            style={{
              marginTop: '56px',
              width: '120px',
              height: '4px',
              borderRadius: '2px',
              backgroundColor: '#2563eb',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
