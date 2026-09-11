/** Conventional Commits — see CONTRIBUTING.md for the full guide. */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "cursos",
        "talleres",
        "inscripcion",
        "home",
        "nosotros",
        "header",
        "footer",
        "design-system",
        "ds",
        "config",
        "deps",
        "ci",
        "release",
      ],
    ],
  },
};
