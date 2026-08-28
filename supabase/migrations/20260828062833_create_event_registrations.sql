/*
# Create event_registrations table for Founder Connect Day

1. New Tables
- `event_registrations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — 참가자 이름
  - `email` (text, not null) — 참가자 이메일
  - `organization` (text, not null) — 소속
  - `purpose` (text, not null) — 참가 목적
  - `created_at` (timestamptz, default now()) — 신청 시각

2. Security
- Enable RLS on `event_registrations`.
- Allow anon + authenticated INSERT only (no login screen, public registration form).
- No SELECT/UPDATE/DELETE policies — registrations are write-only from the public frontend.

3. Notes
- This is a single-tenant, no-auth app. The registration form is public.
- Only INSERT is allowed from the anon key; reading existing registrations is not exposed.
- Server-side validation of required fields is enforced by NOT NULL constraints.
*/

CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text NOT NULL,
  purpose text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_registrations" ON event_registrations;
CREATE POLICY "anon_insert_registrations"
ON event_registrations FOR INSERT
TO anon, authenticated
WITH CHECK (true);
