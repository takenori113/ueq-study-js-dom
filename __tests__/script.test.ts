import { test, expect, describe, beforeEach } from "vitest";
import { screen } from "@testing-library/dom";

import { main } from "../script";

beforeEach(() => {
  document.body.innerHTML = `
    <a data-testid="a" href=""></a>
    <section data-testid="section">
      <div data-testid="temp" id="temp">temp content</div>
    </section>
  `;
});

describe("DOM操作の問題", () => {
  test("リンクが正しく追加されている", () => {
    main();
    const a = screen.queryByTestId<HTMLAnchorElement>("a");
    expect(a?.textContent).toEqual("REDIMPULZ");
    expect(a?.href).toEqual("https://redimpulz.com/");
  });

  test("section要素の下に指定の要素が追加されている", () => {
    main();
    const section = screen.queryByTestId("section");
    expect(section).toContainHTML(
      '<p class="highlight">We hope you enjoy JavaScript.</p>'
    );
  });

  test("IDがtempの要素が削除されている", () => {
    main();
    expect(screen.queryByTestId("temp")).toEqual(null);
  });
});
