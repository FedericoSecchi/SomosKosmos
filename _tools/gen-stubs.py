#!/usr/bin/env python3
"""Genera stubs HTML (meta refresh + canonical + noindex) para las URLs
programáticas que teníamos en el sitio Vite. Se corre UNA VEZ al migrar.

Produce:
- public/project/<slug>/<topic>/index.html  (11 slugs × 24 topics = 264)
- public/topic/<slug>/index.html             (4 landings → /services/branding/)
- public/project/ehtexperience/index.html    (typo → /project/ethperience/)

Los stubs quedan fuera del sitemap. Robots los puede crawlear (no están
bloqueados en robots.txt), ve el noindex y el canonical, y consolida señales
hacia la URL canónica. En ~6 meses se pueden borrar.
"""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

CANONICAL_PROJECTS = [
    "security-alliance", "the-red-guild", "orbita", "nude", "calmo",
    "ethperience", "deltarowling", "fede-garcia", "mareboats", "skyshot", "pancito",
]

PROGRAMMATIC_TOPICS = [
    "brand-architecture", "brand-design", "brand-experience", "brand-guidelines",
    "brand-identity-system", "brand-strategy", "brand-visual-language", "branding",
    "branding-for-tech", "branding-project", "case-study", "corporate-identity",
    "creative-branding", "design-system", "digital-branding", "identity-design",
    "logo-design", "modern-branding", "product-branding", "startup-branding",
    "typography", "visual-brand-system", "visual-identity", "visual-language",
]

TOPIC_LANDINGS = [
    "branding-project-examples",
    "design-system-branding",
    "startup-branding-case-study",
    "visual-identity-design",
]

HTML = """<!doctype html>
<html lang="es-AR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url={target}">
<link rel="canonical" href="https://somoskosmos.com{target}">
<title>{title}</title>
<style>body{{margin:0;background:#222;color:#f5f5f0;font-family:system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:2rem;text-align:center}}a{{color:#6fe23c}}</style>
</head>
<body>
<main>
<p>{message}</p>
<p><a href="{target}">Ir a somoskosmos.com{target}</a></p>
</main>
</body>
</html>
"""


def write(path: Path, target: str, title: str, message: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(HTML.format(target=target, title=title, message=message), encoding="utf-8")


def main() -> None:
    count = 0
    for slug in CANONICAL_PROJECTS:
        canonical = f"/project/{slug}/"
        for topic in PROGRAMMATIC_TOPICS:
            path = PUBLIC / "project" / slug / topic / "index.html"
            write(
                path,
                canonical,
                title=f"Redirigiendo a {slug} — Somos Kosmos",
                message=f"Esta página se mudó al caso de estudio de {slug}.",
            )
            count += 1

    for topic in TOPIC_LANDINGS:
        path = PUBLIC / "topic" / topic / "index.html"
        write(
            path,
            "/services/branding/",
            title="Redirigiendo a nuestro servicio de branding — Somos Kosmos",
            message="Esta página se consolidó en el servicio de branding.",
        )
        count += 1

    typo = PUBLIC / "project" / "ehtexperience" / "index.html"
    write(
        typo,
        "/project/ethperience/",
        title="Redirigiendo a ETHperience — Somos Kosmos",
        message="Corregimos el slug: la nueva URL es /project/ethperience/.",
    )
    count += 1

    print(f"Generados {count} stubs en public/")


if __name__ == "__main__":
    main()
